/**
 * XÁC THỰC KEY & THEO DÕI THỜI GIAN THỰC (REALTIME HEARTBEAT)
 * Dev By Hoàng Hà And Trọng Kiên
 */
'use strict';

const AuthSystem = (function() {
    let _activeKey = null;
    let _keyData = null;
    let _keyListenerUnsub = null;
    let _rtdb = null;
    let _onStatusChangeCallback = null;

    // Initialize Firebase RTDB
    function getDatabase() {
        if (!_rtdb) {
            if (!firebase.apps.length) {
                firebase.initializeApp(window.FIREBASE_CONFIG);
            }
            _rtdb = firebase.database();
        }
        return _rtdb;
    }

    function sanitizeKey(rawKey) {
        return (rawKey || "").trim().toUpperCase().replace(/[.#$\[\]\/]/g, "_");
    }

    // Authenticate Key with Firebase
    async function verifyKey(rawKey) {
        const cleanKey = (rawKey || "").trim().toUpperCase();
        if (!cleanKey) {
            return { success: false, message: "Vui lòng nhập mã Key kích hoạt!" };
        }

        const sanitized = sanitizeKey(cleanKey);
        const db = getDatabase();
        const hwid = await window.SecurityEngine.generateHWID();

        try {
            const snapshot = await db.ref("license_keys").child(sanitized).once("value");
            if (!snapshot.exists()) {
                return { success: false, message: "Mã Key không tồn tại trên hệ thống!" };
            }

            const data = snapshot.val();
            const now = Date.now();

            // 1. Check banned status
            if (data.isBanned === true || data.status === "banned") {
                return { success: false, message: "Mã Key này đã bị KHÓA do vi phạm chính sách!" };
            }

            // 2. Check expiration
            if (!data.isLifetime && data.expiresAt && data.expiresAt < now) {
                return { success: false, message: "Mã Key này đã HẾT HẠN sử dụng! Vui lòng liên hệ Admin để gia hạn." };
            }

            // 3. Multi-device & HWID limit verification
            const maxDevices = data.maxDevices || 1;
            let boundList = data.boundHwids;
            if (!Array.isArray(boundList)) {
                boundList = [];
                if (data.boundHWID) boundList.push(data.boundHWID);
                else if (data.boundHwid) boundList.push(data.boundHwid);
            }

            if (boundList.includes(hwid)) {
                // Current device is already bound and authorized
                await db.ref("license_keys").child(sanitized).update({
                    lastUsed: now
                });
            } else if (boundList.length < maxDevices) {
                // Room available: bind current device
                boundList.push(hwid);
                await db.ref("license_keys").child(sanitized).update({
                    boundHwids: boundList,
                    boundHWID: boundList[0],
                    boundHwid: boundList[0],
                    lastUsed: now,
                    deviceModel: navigator.userAgent.substring(0, 100)
                });
                data.boundHwids = boundList;
                data.boundHWID = boundList[0];
            } else {
                return {
                    success: false,
                    message: `Mã Key đã đạt giới hạn tối đa (${boundList.length}/${maxDevices} thiết bị)! Vui lòng liên hệ Admin để Reset máy.`
                };
            }

            _activeKey = cleanKey;
            _keyData = data;

            // Save encrypted session
            saveSession(cleanKey);

            // Start continuous realtime listener
            startRealtimeListener(sanitized, hwid);

            return { success: true, keyData: data };
        } catch (err) {
            console.error("Auth error:", err);
            return { success: false, message: "Lỗi kết nối Firebase: " + err.message };
        }
    }

    // Continuous Realtime Heartbeat Listener
    function startRealtimeListener(sanitizedKey, currentHwid) {
        if (_keyListenerUnsub) {
            _keyListenerUnsub();
            _keyListenerUnsub = null;
        }

        const db = getDatabase();
        const keyRef = db.ref("license_keys").child(sanitizedKey);

        const onValueCallback = keyRef.on("value", (snapshot) => {
            if (!snapshot.exists()) {
                handleKeyInvalidated("Key đã bị xóa khỏi máy chủ!");
                return;
            }

            const data = snapshot.val();
            _keyData = data;
            const now = Date.now();

            if (data.isBanned === true || data.status === "banned") {
                handleKeyInvalidated("Key vừa bị Admin KHÓA quyền truy cập!");
                return;
            }

            if (!data.isLifetime && data.expiresAt && data.expiresAt < now) {
                handleKeyInvalidated("Key vừa HẾT HẠN sử dụng!");
                return;
            }

            // Check if this device was reset / removed by admin
            let boundList = data.boundHwids;
            if (!Array.isArray(boundList)) {
                boundList = [];
                if (data.boundHWID) boundList.push(data.boundHWID);
                else if (data.boundHwid) boundList.push(data.boundHwid);
            }

            // If key has been reset and this device is no longer in bound list
            if (boundList.length > 0 && !boundList.includes(currentHwid)) {
                handleKeyInvalidated("Mã Key đã được Admin Reset thiết bị sang máy khác!");
                return;
            }

            // Dispatch status update to UI
            if (typeof _onStatusChangeCallback === "function") {
                _onStatusChangeCallback({ status: "active", keyData: data });
            }
        }, (error) => {
            console.error("RTDB listener error:", error);
        });

        _keyListenerUnsub = () => keyRef.off("value", onValueCallback);
    }

    function handleKeyInvalidated(reason) {
        logout();
        if (typeof _onStatusChangeCallback === "function") {
            _onStatusChangeCallback({ status: "invalidated", reason: reason });
        }
    }

    function saveSession(key) {
        try {
            const encrypted = window.SecurityEngine.xorCipher(key);
            localStorage.setItem("_hkn_active_auth_token", encrypted);
        } catch (e) {}
    }

    function loadSavedSessionKey() {
        try {
            const encrypted = localStorage.getItem("_hkn_active_auth_token");
            if (!encrypted) return null;
            return window.SecurityEngine.xorDecipher(encrypted);
        } catch (e) {
            return null;
        }
    }

    function logout() {
        if (_keyListenerUnsub) {
            _keyListenerUnsub();
            _keyListenerUnsub = null;
        }
        _activeKey = null;
        _keyData = null;
        localStorage.removeItem("_hkn_active_auth_token");
    }

    return {
        verifyKey,
        loadSavedSessionKey,
        logout,
        getActiveKey: () => _activeKey,
        getKeyData: () => _keyData,
        onStatusChange: (cb) => { _onStatusChangeCallback = cb; }
    };
})();

window.AuthSystem = AuthSystem;
