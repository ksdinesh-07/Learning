const status_element = document.getElementById("status");
const sync_button = document.getElementById("sync_button");

if ("serviceWorker" in navigator) {
    window.addEventListener("load", async () => {
        try {
            const registration = await navigator.serviceWorker.register("./sw.js");
            status_element.textContent = "Service Worker registered";
            console.log("Service Worker:", registration);
        } catch (error) {
            status_element.textContent = "Service Worker registration failed";
            console.error(error);
        }
    });
}
sync_button.addEventListener("click", async () => {
    const registration = await navigator.serviceWorker.ready;
    if ("sync" in registration) {
        await registration.sync.register("send_data");
        console.log("Background sync registered");
    }
});