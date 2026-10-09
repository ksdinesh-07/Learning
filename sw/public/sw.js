
const CACHE_NAME = "service-worker-poc-v1";

const APP_FILES = [
    "/",
    "/index.html",
    "/offline.html",
    "/css/style.css",
    "/js/app.js"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(APP_FILES))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys()
            .then((cache_names) => {
                return Promise.all(
                    cache_names
                        .filter((cache_name) => cache_name !== CACHE_NAME)
                        .map((cache_name) => caches.delete(cache_name))
                );
            })
            .then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", (event) => {
    const request = event.request;
    const request_url = new URL(request.url);

    if (request.method !== "GET" || request_url.origin !== self.location.origin) {
        return;
    }

    if (request.mode === "navigate") {
        event.respondWith(
            fetch(request)
                .then((response) => {
                    if (response.ok) {
                        const response_copy = response.clone();

                        caches.open(CACHE_NAME)
                            .then((cache) => cache.put(request, response_copy));

                    }

                    return response;
                })
                .catch(async () => {
                    const cached_page = await caches.match(request);

                    if (cached_page) {
                        return cached_page;
                    }

                    return (await caches.match("/offline.html")) ||
                        new Response("You are offline.", {
                            status: 503,
                            headers: { "Content-Type": "text/plain" }
                        });
                })
        );

        return;
    }

    event.respondWith(
        caches.match(request)
            .then((cached_response) => {
                if (cached_response) {
                    return cached_response;
                }

                return fetch(request).then((response) => {
                    if (response.ok) {
                        const response_copy = response.clone();

                        caches.open(CACHE_NAME)
                            .then((cache) => cache.put(request, response_copy));
                    }

                    return response;
                });
            })
    );
});
