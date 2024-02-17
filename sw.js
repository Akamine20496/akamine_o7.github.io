const CACHE_NAME = 'avatarStat-rng-cache';

const ASSETS = [
    "/",
    "/index.html",
    "/app.js",
    "./json/manifest.json",
    "./css/style.css",
    "./js/attribute.js",
    "./js/dialog.js",
    "./js/enchantStat.js",
    "./js/main.js",
    "./js/savedStats.js",
    "./js/saveStat.js",
    "./js/Stat.js",
    "./js/statList.js",
    "./jquery-ui/external/jquery/jquery.js",
    "./jquery-ui/images/ui-icons_444444_256x240.png",
    "./jquery-ui/images/ui-icons_555555_256x240.png",
    "./jquery-ui/images/ui-icons_777620_256x240.png",
    "./jquery-ui/images/ui-icons_777777_256x240.png",
    "./jquery-ui/images/ui-icons_cc0000_256x240.png",
    "./jquery-ui/images/ui-icons_ffffff_256x240.png",
    "./jquery-ui/jquery-ui.min.css",
    "./jquery-ui/jquery-ui.min.js"
];

// install
self.addEventListener('install', event => {
    // Extend the lifetime of the event until all promises inside waitUntil resolve
    event.waitUntil((async () => {
        // Open a new cache storage with the specified CACHE_NAME
        const cache = await caches.open(CACHE_NAME);
        // Log a message indicating the opening of the cache
        console.log('Adding cache: ', ASSETS);
        // Add all specified ASSETS to the cache
        cache.addAll(ASSETS);
    })());
});

// activate
self.addEventListener("activate", event => {
    // Extend the lifetime of the event until all promises inside waitUntil resolve
    event.waitUntil(
        // Retrieve all cache storage keys
        caches.keys().then(cacheNames => {
            // Iterate through each cache storage key
            cacheNames.forEach(name => {
                // Check if the cache storage key matches the specified CACHE_NAME
                if (name === CACHE_NAME) {
                    // If it matches, log a message indicating deletion of the old cache
                    console.log('Deleting old cache:', name);
                    // Delete the cache with the matching name
                    caches.delete(name);
                }
            })
        }).then(() => {
            self.skipWaiting();
        })
    );

    // Immediately take control of clients
    self.clients.claim();
});

// fetch
self.addEventListener('fetch', event => {
    event.respondWith((async () => {
        const cache = await caches.open(CACHE_NAME);

        // get the resource from the cache
        const cachedResponse = await cache.match(event.request);
        console.log('Cached Response', cachedResponse);

        if (cachedResponse) {
            return cachedResponse;
        } else {
            try {
                // if the resource was not in the cache, try the network
                const fetchResponse = await fetch(event.request);

                // save the resource in the cache and return it
                cache.put(event.request, fetchResponse.clone());

                return fetchResponse;
            } catch (event) {
                // The network failed
                console.log('Network Failed');
            }
        }
    })());
});
