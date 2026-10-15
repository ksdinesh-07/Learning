
const CACHE_NAME = "private-chat-shell-v1";

const STATIC_FILES = [
    "/",
    "/index.html",
    "/style.css",
    "/client.js",
    "/manifest.json"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(async (cache) => {
            await cache.addAll(STATIC_FILES);
        })
    );

    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then(async (cache_names) => {
            await Promise.all(
                cache_names
                    .filter((name) => name !== CACHE_NAME)
                    .map((name) => caches.delete(name))
            );

            await self.clients.claim();
        })
    );
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
        caches.match(request).then(async (cached_response) => {
            if (cached_response) {
                return cached_response;
            }

            try {
                const response = await fetch(request);

                if (response.ok && response.type === "basic") {
                    const cache = await caches.open(CACHE_NAME);
                    await cache.put(request, response.clone());
                }

                return response;
            } catch (error) {
                if (request.mode === "navigate") {
                    const fallback = await caches.match("/index.html");

                    if (fallback) {
                        return fallback;
                    }
                }

                throw error;
            }
        })
    );
});

self.addEventListener("sync", (event) => {
    if (event.tag === "sync-pending-messages") {
        event.waitUntil(
            self.clients.matchAll({
                type: "window",
                includeUncontrolled: true
            }).then((clients) => {
                for (const client of clients) {
                    client.postMessage({
                        type: "SYNC_PENDING_MESSAGES"
                    });
                }
            })
        );
    }
});
