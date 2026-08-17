/**
 * QUẢN LÝ GIAO DIỆN TỪ XA & CẬP NHẬT PHIÊN BẢN TỪ ADMIN (REALTIME)
 * Dev By Hoàng Hà And Trọng Kiên
 */
'use strict';

const AppConfigManager = (function() {
    let _currentTheme = 'default';
    let _rtdb = null;

    function getDb() {
        if (!_rtdb) {
            if (!firebase.apps.length) {
                firebase.initializeApp(window.FIREBASE_CONFIG);
            }
            _rtdb = firebase.database();
        }
        return _rtdb;
    }

    // Apply Theme to DOM
    function applyTheme(themeName) {
        _currentTheme = themeName || 'default';
        const body = document.body;

        if (_currentTheme === 'quoc_khanh') {
            body.classList.add('theme-quoc-khanh');
            console.log('[ThemeManager] Applied Theme: Sự Kiện Quốc Khánh 2/9');
        } else {
            body.classList.remove('theme-quoc-khanh');
            console.log('[ThemeManager] Applied Theme: Mặc Định Titanium Dark');
        }
    }

    // Start Realtime Listeners for Theme & Update Control
    function initRealtimeConfigListener() {
        const db = getDb();
        const configRef = db.ref('app_config');

        // 1. Listen for Theme changes
        configRef.child('theme').on('value', (snapshot) => {
            const theme = snapshot.val() || 'default';
            applyTheme(theme);
        });

        // 2. Listen for Remote Update & Version Lock
        configRef.child('update_control').on('value', (snapshot) => {
            const data = snapshot.val();
            handleUpdateControl(data);
        });
    }

    // Handle Remote Version Lock & Force Update Popup
    function handleUpdateControl(data) {
        const updateOverlay = document.getElementById('updateOverlay');
        if (!updateOverlay) return;

        if (!data || !data.force_update) {
            updateOverlay.classList.add('hidden');
            return;
        }

        const currentVersion = window.APP_METADATA.version || '4.8.0';
        const lockedVersions = data.locked_versions || [];
        const minVersion = data.min_version || '4.8.0';

        // Check if current version is locked
        let isLocked = false;

        if (lockedVersions.includes(currentVersion)) {
            isLocked = true;
        } else if (compareVersions(currentVersion, minVersion) < 0) {
            isLocked = true;
        }

        if (isLocked) {
            // Show Full Screen Update Shield
            const titleEl = document.getElementById('updateTitle');
            const versionEl = document.getElementById('updateVersionTag');
            const msgEl = document.getElementById('updateMessage');
            const btnEl = document.getElementById('btnUpdateDownload');

            if (titleEl) titleEl.textContent = data.update_title || 'YÊU CẦU CẬP NHẬT';
            if (versionEl) versionEl.textContent = `Phiên bản mới: v${data.latest_version || '4.9.0'}`;
            if (msgEl) msgEl.textContent = data.update_message || 'App cần được cập nhật lên phiên bản mới hơn để tiếp tục sử dụng.';
            if (btnEl) {
                btnEl.href = data.download_url || 'https://github.com/okphong582-png/T-i-u-Free-Fire/releases';
            }

            updateOverlay.classList.remove('hidden');
        } else {
            updateOverlay.classList.add('hidden');
        }
    }

    // Helper to compare semver versions e.g. "4.8.0" vs "4.9.0"
    function compareVersions(v1, v2) {
        const p1 = (v1 || '0').split('.').map(n => parseInt(n) || 0);
        const p2 = (v2 || '0').split('.').map(n => parseInt(n) || 0);
        for (let i = 0; i < Math.max(p1.length, p2.length); i++) {
            const num1 = p1[i] || 0;
            const num2 = p2[i] || 0;
            if (num1 > num2) return 1;
            if (num1 < num2) return -1;
        }
        return 0;
    }

    return {
        initRealtimeConfigListener,
        applyTheme,
        getCurrentTheme: () => _currentTheme
    };
})();

window.AppConfigManager = AppConfigManager;
