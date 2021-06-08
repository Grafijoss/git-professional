const VERSION = 'v1';

self.addEventListener('install', event => {
  event.waitUntil(precache());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  // get
  if (request.method !== 'GET') {
    return;
  }

  // buscar en cache
  event.respondWith(cachedResponse(request));

  // actualizar el cache
  event.waitUntil(updateCache(request));
});

async function precache() {
  const cache = await caches.open(VERSION);
  // podemos comentar estos archivos por que con parecel cuando los pasa a dist
  // les agrega un hash unico el cual no sabemos
  // pero cuando hacemos el fetch guardamos los archivos y no hay problema
  return cache.addAll([
    // '/',
    // '/index.html',
    // '/assets/index.js',
    // '/assets/MediaPlayer.js',
    // '/assets/plugins/AutoPlay.js',
    // '/assets/plugins/AutoPause.js',
    // '/assets/index.css',
    // '/assets/BigBuckBunny.mp4',
  ]);
}

async function cachedResponse(request) {
  const cache = await caches.open(VERSION);
  const response = await cache.match(request);
  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open(VERSION);
  const response = await fetch(request);
  return cache.put(request, response);
}
