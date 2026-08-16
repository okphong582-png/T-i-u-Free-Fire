/**
 * QUẢN LÝ CÀI ĐẶT, THỜI GIAN CÒN LẠI & THÔNG SỐ THIẾT BỊ
 * Dev By Hoàng Hà And Trọng Kiên
 */
'use strict';

const SettingsManager = (function() {
    let _clockInterval = null;

    // Detect device info & GPU
    function getDeviceSpecs() {
        const ua = navigator.userAgent;
        let osName = "iOS Device";
        if (/iPhone/i.test(ua)) osName = "Apple iPhone (iOS)";
        else if (/iPad/i.test(ua)) osName = "Apple iPad (iPadOS)";
        else if (/Android/i.test(ua)) osName = "Android Device";
        else if (/Windows/i.test(ua)) osName = "Windows PC / Emulator";
        else if (/Mac/i.test(ua)) osName = "Apple Mac";

        let gpuName = "Apple GPU Metal 3";
        try {
            const canvas = document.createElement('canvas');
            const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
            if (gl) {
                const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
                if (debugInfo) {
                    gpuName = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || gpuName;
                }
            }
        } catch (e) {}

        const screenRes = `${window.screen.width * (window.devicePixelRatio || 1)} x ${window.screen.height * (window.devicePixelRatio || 1)} (${window.devicePixelRatio || 1}x)`;
        const refreshRate = window.screen.refreshRate || (window.matchMedia('(min-resolution: 2dppx)').matches ? "120Hz ProMotion" : "60Hz / 120Hz");

        return {
            os: osName,
            gpu: gpuName,
            screen: screenRes,
            hz: refreshRate,
            cores: navigator.hardwareConcurrency || 6
        };
    }

    // Start Live Realtime Clock for Key Expiry
    function startExpiryClock() {
        if (_clockInterval) clearInterval(_clockInterval);

        function tick() {
            const keyData = window.AuthSystem.getKeyData();
            if (!keyData) return;

            const isLifetime = keyData.isLifetime === true;
            const now = Date.now();
            const expiresAt = keyData.expiresAt;

            const daysEl = document.getElementById("timerDays");
            const hoursEl = document.getElementById("timerHours");
            const minsEl = document.getElementById("timerMins");
            const secsEl = document.getElementById("timerSecs");
            const statusBadge = document.getElementById("keyStatusBadge");
            const expiryDateEl = document.getElementById("keyExactExpiryDate");
            const keyMaskedEl = document.getElementById("keyMaskedText");

            if (keyMaskedEl) {
                const raw = keyData.key || "VIP-KEY";
                keyMaskedEl.textContent = raw.length > 8 ? raw.substring(0, 4) + "-****-" + raw.substring(raw.length - 4) : raw;
            }

            if (isLifetime) {
                if (daysEl) daysEl.textContent = "999";
                if (hoursEl) hoursEl.textContent = "24";
                if (minsEl) minsEl.textContent = "59";
                if (secsEl) secsEl.textContent = "59";
                if (statusBadge) statusBadge.textContent = "⭐ VĨNH VIỄN (LIFETIME)";
                if (expiryDateEl) expiryDateEl.textContent = "Vĩnh Viễn Không Hết Hạn";
                return;
            }

            const diff = expiresAt - now;

            if (diff <= 0) {
                if (daysEl) daysEl.textContent = "00";
                if (hoursEl) hoursEl.textContent = "00";
                if (minsEl) minsEl.textContent = "00";
                if (secsEl) secsEl.textContent = "00";
                if (statusBadge) {
                    statusBadge.textContent = "🔴 ĐÃ HẾT HẠN";
                    statusBadge.className = "key-badge badge-expired";
                }
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((diff % (1000 * 60)) / 1000);

            if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
            if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
            if (minsEl) minsEl.textContent = String(mins).padStart(2, '0');
            if (secsEl) secsEl.textContent = String(secs).padStart(2, '0');

            if (statusBadge) {
                statusBadge.textContent = "🟢 ĐANG HOẠT ĐỘNG";
                statusBadge.className = "key-badge badge-active";
            }

            if (expiryDateEl) {
                const d = new Date(expiresAt);
                expiryDateEl.textContent = d.toLocaleDateString("vi-VN") + " " + d.toLocaleTimeString("vi-VN");
            }
        }

        tick();
        _clockInterval = setInterval(tick, 1000);
    }

    // Populate Device Specs HUD
    async function populateDeviceSpecs() {
        const specs = getDeviceSpecs();
        const osEl = document.getElementById("specOS");
        const gpuEl = document.getElementById("specGPU");
        const screenEl = document.getElementById("specScreen");
        const hzEl = document.getElementById("specHz");
        const pingEl = document.getElementById("specPing");

        if (osEl) osEl.textContent = specs.os;
        if (gpuEl) gpuEl.textContent = specs.gpu;
        if (screenEl) screenEl.textContent = specs.screen;
        if (hzEl) hzEl.textContent = specs.hz;

        if (pingEl && window.GameBooster) {
            const livePing = await window.GameBooster.measureRealPing();
            pingEl.textContent = `${livePing} ms (Gaming Route)`;
        }
    }

    return {
        startExpiryClock,
        populateDeviceSpecs,
        getDeviceSpecs,
        stopClock: () => { if (_clockInterval) clearInterval(_clockInterval); }
    };
})();

window.SettingsManager = SettingsManager;
