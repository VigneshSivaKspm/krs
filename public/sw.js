const CACHE_NAME = 'krs-cache-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/flag.png',
  '/assets/vijay.png',
  '/assets/selvaraj.jpg',
  '/assets/murugesan.jpeg',
  '/assets/devemanohari.jpeg',
  '/icons/favicon.ico',
  '/icons/favicon-16x16.png',
  '/icons/favicon-32x32.png',
  '/icons/favicon-96x96.png',
  '/icons/android-icon-36x36.png',
  '/icons/android-icon-48x48.png',
  '/icons/android-icon-72x72.png',
  '/icons/android-icon-96x96.png',
  '/icons/android-icon-144x144.png',
  '/icons/android-icon-192x192.png',
  '/icons/apple-icon.png',
  '/icons/apple-icon-57x57.png',
  '/icons/apple-icon-60x60.png',
  '/icons/apple-icon-72x72.png',
  '/icons/apple-icon-76x76.png',
  '/icons/apple-icon-114x114.png',
  '/icons/apple-icon-120x120.png',
  '/icons/apple-icon-144x144.png',
  '/icons/apple-icon-152x152.png',
  '/icons/apple-icon-180x180.png',
  '/icons/ms-icon-70x70.png',
  '/icons/ms-icon-144x144.png',
  '/icons/ms-icon-150x150.png',
  '/icons/ms-icon-310x310.png'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
  self.skipWaiting();
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request).then((response) => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });
          return response;
        });
      })
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});
