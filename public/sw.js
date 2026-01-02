/**
 * K.R. Saravanakumar (KRS) - Official Website Service Worker
 * Website: https://krsaravanakumar.in
 * 
 * Enhanced caching for SEO and performance optimization
 * Version: 3.0
 */

const CACHE_NAME = 'krs-saravanakumar-cache-v3';
const STATIC_CACHE = 'krs-static-v3';
const DYNAMIC_CACHE = 'krs-dynamic-v3';
const IMAGE_CACHE = 'krs-images-v3';

// Critical resources to cache immediately for SEO and performance
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/robots.txt',
  '/sitemap.xml',
  '/assets/saravanan.png',
  '/assets/text.png',
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

// Install event - Cache critical resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[KRS SW] Caching critical resources for krsaravanakumar.in');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.log('[KRS SW] Cache failed:', error);
      })
  );
  self.skipWaiting();
});

// Fetch event - Network first for HTML, cache first for assets
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') return;
  
  // Skip external requests (except for same origin)
  if (url.origin !== self.location.origin) {
    return;
  }

  // HTML pages - Network first (for SEO freshness)
  if (request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseClone);
          });
          return response;
        })
        .catch(() => caches.match(request) || caches.match('/'))
    );
    return;
  }
  
  // Images - Cache first with network fallback (stale-while-revalidate)
  if (request.destination === 'image' || url.pathname.match(/\.(png|jpg|jpeg|gif|webp|svg|ico)$/i)) {
    event.respondWith(
      caches.match(request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            // Return cached but also update cache in background
            fetch(request).then((response) => {
              if (response && response.status === 200) {
                caches.open(IMAGE_CACHE).then((cache) => {
                  cache.put(request, response);
                });
              }
            }).catch(() => {});
            return cachedResponse;
          }
          return fetch(request).then((response) => {
            if (response && response.status === 200) {
              const responseClone = response.clone();
              caches.open(IMAGE_CACHE).then((cache) => {
                cache.put(request, responseClone);
              });
            }
            return response;
          });
        })
    );
    return;
  }
  
  // Static assets (JS, CSS, fonts) - Cache first
  if (request.destination === 'script' || request.destination === 'style' || 
      url.pathname.match(/\.(js|css|woff|woff2|ttf|eot)$/i)) {
    event.respondWith(
      caches.match(request)
        .then((cachedResponse) => {
          return cachedResponse || fetch(request).then((response) => {
            if (response && response.status === 200) {
              const responseClone = response.clone();
              caches.open(STATIC_CACHE).then((cache) => {
                cache.put(request, responseClone);
              });
            }
            return response;
          });
        })
    );
    return;
  }

  // Default - Stale while revalidate
  event.respondWith(
    caches.match(request)
      .then((response) => {
        const fetchPromise = fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(DYNAMIC_CACHE).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return networkResponse;
        });
        return response || fetchPromise;
      })
  );
});

// Activate event - Clean old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME, STATIC_CACHE, DYNAMIC_CACHE, IMAGE_CACHE];
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log('[KRS SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Background sync for offline support
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-contact') {
    console.log('[KRS SW] Background sync triggered');
  }
});

// Push notification support (for future use)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body || 'K.R. Saravanakumar - New Update',
      icon: '/icons/android-icon-192x192.png',
      badge: '/icons/android-icon-96x96.png',
      vibrate: [100, 50, 100],
      data: {
        url: data.url || 'https://krsaravanakumar.in/'
      }
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title || 'KRS Update', options)
    );
  }
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url || 'https://krsaravanakumar.in/')
  );
});
