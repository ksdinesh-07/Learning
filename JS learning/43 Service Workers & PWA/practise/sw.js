const cache_name = "pwa-cache-v1";

const files_to_cache = [
    "./",
    "./index.html",
    "./app.js",
    "./manifest.json",
    "./offline.html"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cache_name).then((cache) => {
            return cache.addAll(files_to_cache);
        })
    );
});

self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cache_names) => {
            return Promise.all(
                cache_names
                    .filter((name) => name !== cache_name)
                    .map((name) => caches.delete(name))
            );
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((cached_response) => {
            return cached_response || fetch(event.request);
        })
    );
});

self.addEventListener("sync", (event) => {
    if (event.tag === "send_data") {
        event.waitUntil(
            console.log("Background sync executed")
        );
    }
});