const CACHE_NAME = 'toiuu-ff-v4.8.0';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './css/style.css',
  './js/config.js',
  './js/security.js',
  './js/firebase-auth.js',
  './js/booster.js',
  './js/settings.js',
  './assets/logo.png',
  './assets/freefire_logo.png',
  './assets/freefire_max_logo.png',
  './manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((k) => {
          if (k !== CACHE_NAME) return caches.delete(k);
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // Let Firebase API & RTDB calls go through network directly
  if (e.request.url.includes('firebaseio.com') || e.request.url.includes('googleapis.com')) {
    return;
  }
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
