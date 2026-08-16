/**
 * CẤU HÌNH HỆ THỐNG FIREBASE & API
 * Dev By Hoàng Hà And Trọng Kiên
 */
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyDG0lwriCxQ9NMVDVCA6EoCBvUIdxN3KV4",
    authDomain: "ewrergdf.firebaseapp.com",
    projectId: "ewrergdf",
    storageBucket: "ewrergdf.firebasestorage.app",
    messagingSenderId: "431460023212",
    appId: "1:431460023212:web:a7e0dcebe8b8da8db49809",
    measurementId: "G-XPXK8VH9DV",
    databaseURL: "https://ewrergdf-default-rtdb.firebaseio.com"
};

const APP_METADATA = {
    name: "Tối Ưu Free Fire VIP",
    version: "4.8.0-ULTRA",
    buildNumber: 20260816,
    author: "Dev By Hoàng Hà And Trọng Kiên",
    scheme_ff_normal: "freefire://",
    scheme_ff_max: "freefiremax://",
    package_ff_normal: "com.dts.freefireth",
    package_ff_max: "com.dts.freefiremax"
};

// Export to window
window.FIREBASE_CONFIG = FIREBASE_CONFIG;
window.APP_METADATA = APP_METADATA;
