
const CACHE_NAME = "private-chat-shell-v3";

const APP_FILES = [
    "/",
    "/index.html",
    "/style.css",
    "/client.js",
    "/manifest.json"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(APP_FILES);
        })
    );

    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cache_names) => {
            return Promise.all(
                cache_names
                    .filter((cache_name) => {
                        return cache_name.startsWith("private-chat-shell-") &&
                            cache_name !== CACHE_NAME;
                    })
                    .map((cache_name) => caches.delete(cache_name))
            );
        })
    );

    self.clients.claim();
});

self.addEventListener("fetch", (event) => {
    const request = event.request;
    const url = new URL(request.url);

    if (
        request.method !== "GET" ||
        url.origin !== self.location.origin ||
        url.pathname.startsWith("/socket.io/") ||
        url.pathname.startsWith("/api/")
    ) {
        return;
    }

    event.respondWith(
        fetch(request)
            .then((response) => {
                if (response.ok) {
                    const response_copy = response.clone();

                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(request, response_copy);
                    });
                }

                return response;
            })
            .catch(async () => {
                const cached_response = await caches.match(request);

                if (cached_response) {
                    return cached_response;
                }

                if (request.mode === "navigate") {
                    const cached_page = await caches.match("/index.html");

                    if (cached_page) {
                        return cached_page;
                    }
                }

                return Response.error();
            })
    );
});
