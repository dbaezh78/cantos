// Define el nombre de la caché. Es buena práctica versionar tu caché.
const CACHE_NAME = 'cantos-cache-v1.5'; // Versión actualizada para forzar reinstalación

// Define la URL de la página offline. Asegúrate de que esta página exista.
const OFFLINE_URL = '/cantos/resucito/offline.html';

// Lista de URLs estáticas que se deben cachear durante la instalación del Service Worker.
const urlsToCache = [
    '/cantos/', // Asegura que la raíz sea precacheada
    '/cantos/index.html',
    '/cantos/src/js/manifest.json',
    OFFLINE_URL, // Asegúrate de que esta página exista para el modo offline

    // Archivos CSS
    '/cantos/src/css/dbCSS.css',
    '/cantos/src/css/cssc/dbcssCantos.css',
    '/cantos/src/css/styles.css',
    '/cantos/src/css/mensajekiko.css',
    '/cantos/src/css/cssc/asihablaelamen.css', // CSS específico para asihablaelamen.html

    // Archivos JavaScript
    '/cantos/src/js/dbMainJS.js',
    '/cantos/src/js/songs-data.js', // Archivo de datos de canciones
    '/cantos/src/js/app.js',
    '/cantos/src/js/mensajekiko.js',
    '/cantos/resucito/cjs/asihablaelamen.js', // Archivo JS específico

    // Fuentes
    '/cantos/src/font/LibreFranklin-Bold.ttf',
    '/cantos/src/font/font.woff2',
    '/cantos/src/font/Fave-ScriptBoldPro.woff2',
    '/cantos/src/font/Fave-ScriptBoldPro.woff',
    '/cantos/src/font/Fave-ScriptBoldPro.ttf',
    '/cantos/src/font/FranklinGothicMedium.ttf',

    // Imágenes e íconos
    '/cantos/img/logo_cantos.png',
    '/cantos/src/ico.ico',
    '/cantos/src/icons/icon-192x192.png',
    '/cantos/src/icons/icon-512x512.png',
    '/cantos/src/ima/do.jpg', // Imágenes de acordes
    '/cantos/src/ima/dom.jpg',
    '/cantos/src/ima/do7.jpg',
    '/cantos/src/ima/dos.jpg',
    '/cantos/src/ima/dosm.jpg',
    '/cantos/src/ima/dos7.jpg',
    '/cantos/src/ima/re.jpg',
    '/cantos/src/ima/rem.jpg',
    '/cantos/src/ima/re7.jpg',
    '/cantos/src/ima/rem9.jpg',
    '/cantos/src/ima/res.jpg',
    '/cantos/src/ima/resm.jpg',
    '/cantos/src/ima/mi.jpg',
    '/cantos/src/ima/mim.jpg',
    '/cantos/src/ima/mi7.jpg',
    '/cantos/src/ima/mimaj7.jpg',
    '/cantos/src/ima/mi6.jpg',
    '/cantos/src/ima/mim6.jpg',
    '/cantos/src/ima/fa.jpg',
    '/cantos/src/ima/fam.jpg',
    '/cantos/src/ima/fa7.jpg',
    '/cantos/src/ima/famaj7.jpg',
    '/cantos/src/ima/famaj713.jpg',
    '/cantos/src/ima/fas.jpg',
    '/cantos/src/ima/fasm.jpg',
    '/cantos/src/ima/fas5-9dim.jpg',
    '/cantos/src/ima/sol.jpg',
    '/cantos/src/ima/solm.jpg',
    '/cantos/src/ima/sol7.jpg',
    '/cantos/src/ima/sols.jpg',
    '/cantos/src/ima/solsm.jpg',
    '/cantos/src/ima/sols7.jpg',
    '/cantos/src/ima/la.jpg',
    '/cantos/src/ima/lam.jpg',
    '/cantos/src/ima/la7.jpg',
    '/cantos/src/ima/lam7.jpg',
    '/cantos/src/ima/la6.jpg',
    '/cantos/src/ima/lam6.jpg',
    '/cantos/src/ima/lab.jpg',
    '/cantos/src/ima/si.jpg',
    '/cantos/src/ima/Sim.jpg',
    '/cantos/src/ima/si7.jpg',
    '/cantos/src/ima/sib.jpg',
    '/cantos/src/ima/sibm.jpg',
    '/cantos/src/ima/sib7.jpg',

    // JSON de búsqueda
    '/cantos/resucito/find/index.json' // Archivo JSON de búsqueda
];

// Evento 'install': Se dispara cuando el Service Worker se instala.
// Aquí abrimos la caché y agregamos todos los recursos estáticos.
self.addEventListener('install', (event) => {
    console.log('[Service Worker] Instalando...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[Service Worker] Cache abierta:', CACHE_NAME);
                // Usamos Promise.allSettled para que la instalación no falle
                // si alguno de los recursos no se puede cachear.
                return Promise.allSettled(
                    urlsToCache.map(url => {
                        // Para precachear index.json, asegúrate de que se cachee sin parámetros de consulta
                        const requestToCache = (url === '/cantos/resucito/find/index.json') ? new Request(url, { ignoreSearch: true }) : url;
                        return cache.add(requestToCache).catch(error => {
                            console.warn(`[Service Worker] Fallo al cachear ${url}:`, error);
                            // No lanzamos el error para que Promise.allSettled continúe
                            // y el Service Worker se instale.
                        });
                    })
                );
            })
            .then(() => {
                console.log('[Service Worker] Todos los recursos estáticos intentados de cachear.');
            })
            .catch((error) => {
                // Este catch solo se ejecutará si hay un problema abriendo la caché
                // o si Promise.allSettled falla por alguna razón inesperada.
                console.error('[Service Worker] Fallo crítico durante la instalación:', error);
            })
    );
});

// Evento 'fetch': Se dispara cada vez que el navegador hace una solicitud de red.
// Aquí interceptamos las solicitudes y servimos desde la caché si el recurso está disponible,
// o lo cacheamos si es un archivo de audio o una página de canto HTML.
self.addEventListener('fetch', (event) => {
    // Ignorar solicitudes que no sean GET o de extensiones específicas (ej. chrome-extension://)
    if (event.request.method !== 'GET' || event.request.url.startsWith('chrome-extension://')) {
        return;
    }

    const requestUrl = new URL(event.request.url);
    const isIndexJsonRequest = requestUrl.pathname === '/cantos/resucito/find/index.json';
    // Nueva verificación para la URL raíz o index.html
    const isRootOrIndexHtmlRequest = requestUrl.pathname === '/cantos/' || requestUrl.pathname === '/cantos/index.html';

    // Estrategia para la URL raíz o index.html
    if (isRootOrIndexHtmlRequest) {
        event.respondWith(
            caches.match('/cantos/index.html') // Intenta encontrar index.html en caché
                .then(cachedResponse => {
                    if (cachedResponse) {
                        console.log('[Service Worker] Sirviendo index.html desde caché para solicitud de raíz:', event.request.url);
                        return cachedResponse;
                    }
                    // Si no está en caché, va a la red
                    return fetch(event.request).then(networkResponse => {
                        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                            return networkResponse;
                        }
                        const responseToCache = networkResponse.clone();
                        caches.open(CACHE_NAME).then(cache => {
                            // Cachea la respuesta de index.html con la clave explícita
                            cache.put('/cantos/index.html', responseToCache);
                        });
                        return networkResponse;
                    }).catch(() => {
                        console.log('[Service Worker] Red offline para index.html, intentando servir página offline.');
                        return caches.match(OFFLINE_URL); // Si todo falla, sirve la página offline
                    });
                })
        );
        return; // Termina el evento fetch para esta solicitud
    }

    // Estrategia para index.json (ignorando parámetros de búsqueda)
    if (isIndexJsonRequest) {
        event.respondWith(
            caches.match(event.request, { ignoreSearch: true }) // Intenta encontrar index.json en caché, ignorando parámetros
                .then((cachedResponse) => {
                    if (cachedResponse) {
                        console.log('[Service Worker] Sirviendo index.json desde caché (ignorando parámetros):', event.request.url);
                        return cachedResponse;
                    }

                    // Si no está en caché, intenta obtener de la red.
                    console.log('[Service Worker] Obteniendo index.json de la red:', event.request.url);
                    return fetch(event.request)
                        .then((networkResponse) => {
                            // Verifica si la respuesta de la red es válida.
                            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                                return networkResponse;
                            }
                            // Clona la respuesta para cachearla.
                            const responseToCache = networkResponse.clone();
                            caches.open(CACHE_NAME)
                                .then((cache) => {
                                    // Cachea index.json con la URL base (sin parámetros)
                                    cache.put(new Request(requestUrl.origin + requestUrl.pathname), responseToCache);
                                });
                            return networkResponse;
                        })
                        .catch(() => {
                            // Si la red falla y no se encontró en caché, no hay un fallback HTML para un JSON.
                            console.error('[Service Worker] Fallo al obtener index.json de red y no en caché.');
                            return new Response(JSON.stringify({ error: 'No se pudo cargar el buscador sin conexión.' }), {
                                headers: { 'Content-Type': 'application/json' },
                                status: 503, // Service Unavailable
                                statusText: 'Service Unavailable (Offline)'
                            });
                        });
                })
        );
        return; // Termina el evento fetch para index.json
    }

    // Para todas las demás solicitudes (general cache-first, network-fallback)
    event.respondWith(
        caches.match(event.request) // Intenta obtener de la caché primero
            .then((cachedResponse) => {
                if (cachedResponse) {
                    console.log('[Service Worker] Sirviendo desde caché:', event.request.url);
                    return cachedResponse;
                }

                // Si no está en caché, intenta obtener de la red.
                console.log('[Service Worker] Obteniendo de la red:', event.request.url);
                return fetch(event.request)
                    .then((networkResponse) => {
                        // Verificar si la respuesta de la red es válida.
                        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                            return networkResponse;
                        }

                        // Clonar la respuesta porque un stream de respuesta solo puede ser consumido una vez.
                        const responseToCache = networkResponse.clone();

                        // Determinar si este recurso debe ser cacheado dinámicamente
                        const url = event.request.url;
                        const isAudio = url.endsWith('.mp3');
                        const isSongHtml = url.startsWith(self.location.origin + '/cantos/resucito/') && url.endsWith('.html');
                        const isCjsJs = url.startsWith(self.location.origin + '/cantos/resucito/cjs/') && url.endsWith('.js');

                        if (isAudio || isSongHtml || isCjsJs) {
                            caches.open(CACHE_NAME)
                                .then((cache) => {
                                    console.log(`[Service Worker] Cacheando dinámicamente ${isAudio ? 'audio' : isSongHtml ? 'HTML de canto' : 'JS de cjs'}:`, url);
                                    cache.put(event.request, responseToCache); // Cachear la solicitud original con parámetros
                                })
                                .catch((error) => {
                                    console.error(`[Service Worker] Fallo al cachear ${isAudio ? 'audio' : isSongHtml ? 'HTML de canto' : 'JS de cjs'} dinámicamente:`, error);
                                });
                        }

                        return networkResponse; // Devolver la respuesta de la red al navegador
                    })
                    .catch(() => {
                        // Si la red falla y no hay nada en caché, intenta servir la página offline.
                        console.log('[Service Worker] Red offline, intentando servir página offline.');
                        return caches.match(OFFLINE_URL);
                    });
            })
    );
});

// Evento 'activate': Se dispara cuando el Service Worker se activa.
// Aquí limpiamos las cachés antiguas para asegurar que solo la versión actual esté activa.
self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Activando...');
    const cacheWhitelist = [CACHE_NAME]; // Solo mantenemos la caché con el nombre actual.

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    // Si el nombre de la caché no está en la lista blanca, la eliminamos.
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        console.log('[Service Worker] Eliminando caché antigua:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    // Asegura que el Service Worker tome el control de las páginas existentes inmediatamente.
    return self.clients.claim();
});
