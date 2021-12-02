const CACHE_NAME = "banktoken-v1";
// Customize this with a different URL if needed.
const appShellFiles = [
  './ble.html',
  './index.html',
  './index.js',
  './login.css',
  './login.html',
  './manifest-icon-192.png',
  './manifest-icon-512.png',
  './apple-icon-180.png',
  './images/favicon-32x32.png',
  './images/icon.png',
  './images/profile.jpeg',
  './bs513.css',
  './jquery1102.js'
  
];
const contentToCache = appShellFiles;

self.addEventListener("install", (event) => {
  console.log('[Service Worker] Install');
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      // Setting {cache: 'reload'} in the new request will ensure that the
      // response isn't fulfilled from the HTTP cache; i.e., it will be from
      // the network.
      console.log('[Service Worker] Caching all: app shell and content');
      await cache.addAll(contentToCache);
      
    })()
  );
  // Force the waiting service worker to become the active service worker.
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      // Enable navigation preload if it's supported.
      // See https://developers.google.com/web/updates/2017/02/navigation-preload
      if ("navigationPreload" in self.registration) {
        await self.registration.navigationPreload.enable();
      }
    })()
  );

  // Tell the active service worker to take control of the page immediately.
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // We only want to call event.respondWith() if this is a navigation request
  // for an HTML page.
  //if (event.request.mode === "navigate") {
  //   event.respondWith(
  //     (async () => {
  //       try {
  //         // First, try to use the navigation preload response if it's supported.
  //         const preloadResponse = await event.preloadResponse;
  //         if (preloadResponse) {
  //           return preloadResponse;
  //         }

  //         // Always try the network first.
  //         const networkResponse = await fetch(event.request);
  //         return networkResponse;
  //       } catch (error) {
  //         // catch is only triggered if an exception is thrown, which is likely
  //         // due to a network error.
  //         // If fetch() returns a valid HTTP response with a response code in
  //         // the 4xx or 5xx range, the catch() will NOT be called.
  //         console.log("Fetch failed; returning offline version instead.", error);

  //         const cache = await caches.open(CACHE_NAME);
  //         const cachedResponse = await caches.open(CACHE_NAME);
  //         return cachedResponse;
  //       }
  //     })()
  //   );
  // }

  event.respondWith((async () => {
    const r = await caches.match(event.request);
    console.log(`[Service Worker] Fetching resource: ${event.request.url}`);
    if (r) return r;
    const response = await fetch(event.request);
    const cache = await caches.open(CACHE_NAME);
    console.log(`[Service Worker] Caching new resource: ${event.request.url}`);
    cache.put(event.request, response.clone());
    return response;
  })());

  // If our if() condition is false, then this fetch handler won't intercept the
  // request. If there are any other fetch handlers registered, they will get a
  // chance to call event.respondWith(). If no fetch handlers call
  // event.respondWith(), the request will be handled by the browser as if there
  // were no service worker involvement.
});