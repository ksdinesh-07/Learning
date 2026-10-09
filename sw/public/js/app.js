
const network_status = document.getElementById("network-status");
const worker_status = document.getElementById("worker-status");
const test_button = document.getElementById("test-button");
const test_result = document.getElementById("test-result");

function update_network_status() {
    network_status.textContent = navigator.onLine ? "Online" : "Offline";
}

update_network_status();

window.addEventListener("online", update_network_status);
window.addEventListener("offline", update_network_status);

test_button.addEventListener("click", () => {
    test_result.textContent = `JavaScript is working. Time: ${new Date().toLocaleTimeString()}`;
});

async function register_service_worker() {
    if (!("serviceWorker" in navigator)) {
        worker_status.textContent = "Not supported";
        return;
    }

    try {
        const registration = await navigator.serviceWorker.register("./sw.js");
        await navigator.serviceWorker.ready;

        worker_status.textContent = "Registered and ready";
        console.log("Service Worker registered:", registration.scope);
    } catch (error) {
        worker_status.textContent = "Registration failed";
        console.error("Service Worker registration failed:", error);
    }
}

register_service_worker();
