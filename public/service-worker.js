// ДЛЯ PWA

const CACHE_NAME = "blogpoint-cache-v2";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  '../src/App.css',
  '../src/index.css',
  "/icons/logo-192x192.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).catch(() => {
        // Fallback для API-запросов (если нужно)
        if (event.request.url.includes("/api/")) {
          return caches.match("/offline-data.json"); // Заглушка
        }
        return caches.match("/index.html"); // SPA Fallback
      });
    })
  );
});

// Обновление Service Worker
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
