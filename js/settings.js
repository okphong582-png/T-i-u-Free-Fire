/**
 * THÔNG SỐ THIẾT BỊ, IMEI, PHẦN CỨNG & ĐẾM NGƯỢC THỜI GIAN
 * Dev By Hoàng Hà And Trọng Kiên
 */
'use strict';

const SettingsManager = (function() {
    let _clockInterval = null;
    let _deviceInfo = null;

    // Detect exact iPhone model e.g. IP13, IP14 Pro Max, IP15 Pro Max
    function getDeviceSpecs() {
        if (_deviceInfo) return _deviceInfo;

        const ua = navigator.userAgent;
        let modelName = "IP13";
        let iosVersion = "iOS 17.4";
        let chipName = "Apple A15 / A16 Bionic";
        
        // Match iOS version
        const iosMatch = ua.match(/OS (\d+)_(\d+)_?(\d+)?/);
        if (iosMatch) {
            iosVersion = `iOS ${iosMatch[1]}.${iosMatch[2]}` + (iosMatch[3] ? `.${iosMatch[3]}` : '');
        }

        const w = window.screen.width;
        const h = window.screen.height;
        const maxDim = Math.max(w, h);
        const minDim = Math.min(w, h);
        const ratio = window.devicePixelRatio || 3;

        // Exact iPhone Model Mapping (Formatted as IP11, IP12, IP13, IP14, IP15, IP16)
        if (maxDim === 932 && minDim === 430) {
            modelName = "IP15 Pro Max";
            chipName = "Apple A17 Pro (6-Core GPU)";
        } else if (maxDim === 852 && minDim === 393) {
            modelName = "IP15 Pro";
            chipName = "Apple A17 Pro / A16";
        } else if (maxDim === 926 && minDim === 428) {
            modelName = "IP13 Pro Max";
            chipName = "Apple A15 Bionic";
        } else if (maxDim === 844 && minDim === 390) {
            modelName = "IP13";
            chipName = "Apple A15 Bionic (4-Core GPU)";
        } else if (maxDim === 896 && minDim === 414) {
            modelName = ratio >= 3 ? "IP11 Pro Max" : "IP11";
            chipName = "Apple A13 Bionic";
        } else if (maxDim === 812 && minDim === 375) {
            modelName = "IP13 mini";
            chipName = "Apple A15 Bionic";
        } else if (maxDim === 736 && minDim === 414) {
            modelName = "IP8 Plus";
            chipName = "Apple A11 Bionic";
        } else if (maxDim === 667 && minDim === 375) {
            modelName = "IP SE";
            chipName = "Apple A15 Bionic";
        } else {
            if (/iPad/i.test(ua)) {
                modelName = "iPad Pro M2";
                chipName = "Apple M2 Silicon";
            } else {
                modelName = "IP13";
                chipName = "Apple A15 Bionic";
            }
        }

        // Generate consistent simulated IMEI & UDID from persistent seed
        let seed = localStorage.getItem('_hkn_imei_seed');
        if (!seed) {
            seed = Math.floor(100000000000000 + Math.random() * 900000000000000).toString();
            localStorage.setItem('_hkn_imei_seed', seed);
        }
        
        const imeiFormatted = `${seed.substring(0, 6)}-${seed.substring(6, 8)}-${seed.substring(8, 14)}-${seed.substring(14, 15) || '1'}`;
        const udidFormatted = `0000${seed.substring(0, 4)}-00${seed.substring(4, 10)}E`;

        let gpuName = "Apple Metal 3";
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

        const screenRes = `${minDim * ratio} x ${maxDim * ratio} (${ratio}x Retina)`;
        const refreshRate = window.matchMedia('(min-resolution: 2dppx)').matches ? "120Hz ProMotion" : "60Hz";

        _deviceInfo = {
            model: modelName,
            ios: iosVersion,
            chip: chipName,
            imei: imeiFormatted,
            udid: udidFormatted,
            gpu: gpuName,
            screen: screenRes,
            hz: refreshRate,
            ram: "8,192 MB (LPDDR5)"
        };

        return _deviceInfo;
    }

    // Populate all info displays
    function populateAllHardwareDisplays() {
        const specs = getDeviceSpecs();
        
        // 1. Auth Shield Header
        const authModel = document.getElementById("authDevModel");
        const authIos = document.getElementById("authDevIos");
        const authImei = document.getElementById("authDevImei");
        const authChip = document.getElementById("authDevChip");

        if (authModel) authModel.textContent = specs.model;
        if (authIos) authIos.textContent = specs.ios;
        if (authImei) authImei.textContent = specs.imei;
        if (authChip) authChip.textContent = specs.chip;

        // 2. Info Bar below App Header
        const barModel = document.getElementById("barDevModel");
        const barIos = document.getElementById("barDevIos");
        const barImei = document.getElementById("barDevImei");

        if (barModel) barModel.textContent = specs.model;
        if (barIos) barIos.textContent = specs.ios;
        if (barImei) barImei.textContent = specs.imei;

        // 3. Settings tab specs
        const setModel = document.getElementById("specModel");
        const setIos = document.getElementById("specIos");
        const setImei = document.getElementById("specImei");
        const setGpu = document.getElementById("specGpu");
        const setScreen = document.getElementById("specScreen");
        const setHz = document.getElementById("specHz");

        if (setModel) setModel.textContent = specs.model;
        if (setIos) setIos.textContent = specs.ios;
        if (setImei) setImei.textContent = specs.imei;
        if (setGpu) setGpu.textContent = specs.gpu;
        if (setScreen) setScreen.textContent = specs.screen;
        if (setHz) setHz.textContent = specs.hz;
    }

    // Expiry live clock
    function startExpiryClock() {
        if (_clockInterval) clearInterval(_clockInterval);

        function tick() {
            const keyData = window.AuthSystem.getKeyData();
            if (!keyData) return;

            const isLifetime = keyData.isLifetime === true;
            const now = Date.now();
            const expiresAt = keyData.expiresAt;

            const dEl = document.getElementById("clockDays");
            const hEl = document.getElementById("clockHours");
            const mEl = document.getElementById("clockMins");
            const sEl = document.getElementById("clockSecs");
            const badgeEl = document.getElementById("clockStatusBadge");
            const maskedEl = document.getElementById("clockMaskedKey");

            if (maskedEl) {
                const raw = keyData.key || "VIP-KEY";
                maskedEl.textContent = raw.length > 8 ? raw.substring(0, 4) + "-****-" + raw.substring(raw.length - 4) : raw;
            }

            if (isLifetime) {
                if (dEl) dEl.textContent = "999";
                if (hEl) hEl.textContent = "24";
                if (mEl) mEl.textContent = "59";
                if (sEl) sEl.textContent = "59";
                if (badgeEl) badgeEl.textContent = "⭐ VĨNH VIỄN (LIFETIME)";
                return;
            }

            const diff = expiresAt - now;
            if (diff <= 0) {
                if (dEl) dEl.textContent = "00";
                if (hEl) hEl.textContent = "00";
                if (mEl) mEl.textContent = "00";
                if (sEl) sEl.textContent = "00";
                if (badgeEl) badgeEl.textContent = "🔴 ĐÃ HẾT HẠN";
                return;
            }

            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((diff % (1000 * 60)) / 1000);

            if (dEl) dEl.textContent = String(days).padStart(2, '0');
            if (hEl) hEl.textContent = String(hours).padStart(2, '0');
            if (mEl) mEl.textContent = String(mins).padStart(2, '0');
            if (sEl) sEl.textContent = String(secs).padStart(2, '0');
            if (badgeEl) badgeEl.textContent = "🟢 HOẠT ĐỘNG";
        }

        tick();
        _clockInterval = setInterval(tick, 1000);
    }

    return {
        getDeviceSpecs,
        populateAllHardwareDisplays,
        startExpiryClock,
        stopClock: () => { if (_clockInterval) clearInterval(_clockInterval); }
    };
})();

window.SettingsManager = SettingsManager;
