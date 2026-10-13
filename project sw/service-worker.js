const CACHE_NAME = "task-tracker-v1";

const APP_FILES = [
    "./",
    "./index.html",
    "./style.css",
    "./app.js"
];

// Install: cache application resources.
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(APP_FILES))
            .then(() => self.skipWaiting())
    );
});

// Activate: remove older versions of this app's cache.
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(
                keys
                    .filter((key) =>
                        key.startsWith("task-tracker-") &&
                        key !== CACHE_NAME
                    )
                    .map((key) => caches.delete(key))
            )
        ).then(() => self.clients.claim())
    );
});

// Fetch: try the network first, then fall back to cache.
self.addEventListener("fetch", (event) => {
    if (event.request.method !== "GET") return;

    const url = new URL(event.request.url);

    if (url.origin !== self.location.origin) return;

    event.respondWith(
        fetch(event.request)
            .catch(() => caches.match(event.request))
            .then((response) => {
                if (response) return response;

                if (event.request.mode === "navigate") {
                    return caches.match("./index.html");
                }

                return Response.error();
            })
    );
});