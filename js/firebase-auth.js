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
            if (data.status === "banned") {
                return { success: false, message: "Mã Key này đã bị KHÓA do vi phạm chính sách!" };
            }

            // 2. Check expiration
            if (!data.isLifetime && data.expiresAt < now) {
                return { success: false, message: "Mã Key này đã HẾT HẠN sử dụng! Vui lòng liên hệ Admin để gia hạn." };
            }

            // 3. Check HWID binding
            if (data.boundHWID && data.boundHWID !== hwid && data.maxDevices === 1) {
                return { success: false, message: "Mã Key đã được kích hoạt trên một thiết bị khác! (HWID Locked)" };
            }

            // Update HWID on first use if unbound
            if (!data.boundHWID) {
                await db.ref("license_keys").child(sanitized).update({
                    boundHWID: hwid,
                    lastUsed: now,
                    deviceModel: navigator.userAgent.substring(0, 100)
                });
                data.boundHWID = hwid;
            } else {
                await db.ref("license_keys").child(sanitized).update({
                    lastUsed: now
                });
            }

            _activeKey = cleanKey;
            _keyData = data;

            // Save encrypted session
            saveSession(cleanKey);

            // Start continuous realtime listener
            startRealtimeListener(sanitized);

            return { success: true, keyData: data };
        } catch (err) {
            console.error("Auth error:", err);
            return { success: false, message: "Lỗi kết nối Firebase: " + err.message };
        }
    }

    // Continuous Realtime Heartbeat Listener
    function startRealtimeListener(sanitizedKey) {
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

            if (data.status === "banned") {
                handleKeyInvalidated("Key vừa bị Admin KHÓA quyền truy cập!");
                return;
            }

            if (!data.isLifetime && data.expiresAt < now) {
                handleKeyInvalidated("Key vừa HẾT HẠN sử dụng!");
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
