## Service Workers
***

Sirven para hacer que nuestras aplicaciones funcionen Offline.

Muy usados en las Progressive Web Apps (PWA) los ServiceWorkers son una capa que vive entre el navegador y el Internet.

Parecido a como lo hacen los proxys van a interceptar peticiones para guardar el resultado en cache y la próxima vez que se haga la petición tomar del cache ese resultado.




## devTools
***

- chrome aplication > service workers
- update on reload
- - El service worker se instala en el navegador del usuario
- - en desarrollo con el animo de hacer pruebas nos interesa que se instale de nuevo cada vez que refrescamos el navegador
- cache storage: podemos ver toda la lista de archivos que estan cacheados
- offline: nos permite probar la aplicación son red


```javascript
// validamos si el navegador soporta serviceWorker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
      // si durante el registro ocurre un error podemos tomar alguna acción
    console.log(error.message);
  });
}


// el archivo sw.js debe estar en el nivel mas alto del proyecto

const VERSION = 'v1';

// self es el this de los serviceworkers
// se lama cuando el navegador instale el service worker
// le pasamos un evento como callback
self.addEventListener('install', event => {
    // event.waitUntil espera a que el precache se complete
    // lamamos la funcion de precache
    // precache nos va a regresar una promesa con la lista de archivos que vamos acachear
  event.waitUntil(precache());
});


// este listener se usa para las peticiones fetch
self.addEventListener('fetch', event => {
    // extraemos la peticion desde el request del evento
  const request = event.request;
  // solo queremos cachear las peticiones de tipo get
  if (request.method !== 'GET') {
    return;
  }

  // buscar en cache
  event.respondWith(cachedResponse(request));

  // actualizar el cache
  // prevenismo quedarnos con una version vieja en cache}
});

async function precache() {
    //  abrimos una version de cache especifica
    // regresa una promesa
  const cache = await caches.open(VERSION);
  return cache.addAll([
    '/',
    '/index.html',
    '/assets/index.js',
    '/assets/MediaPlayer.js',
    '/assets/plugins/AutoPlay.js',
    '/assets/plugins/AutoPause.js',
    '/assets/index.css',
    '/assets/BigBuckBunny.mp4',
  ]);
}

async function cachedResponse(request) {
    // preguntamos si hace match del la peticion y esta guardada en cache
  const cache = await caches.open(VERSION);
  const response = await cache.match(request);
  // en el caso de que response sea undefined respondemos con la peticion del fetch desde internet
  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open(VERSION);
  // buscamos una copia actualizada del recurso
  const response = await fetch(request);
  // añadimos o actualizamos el nuevo resurso al cache con la llave del request
  return cache.put(request, response);
}



```