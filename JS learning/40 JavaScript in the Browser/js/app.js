//DOM
const product_name = document.getElementById("product_name");
const product_price = document.getElementById("product_price");
const add_button = document.getElementById("add_button");
const product_list = document.getElementById("product_list");
// Product Data
const products = [
    {
        id: 1,
        name: "Laptop",
        price: 55000
    },
    {
        id: 2,
        name: "Wireless Mouse",
        price: 1200
    }
];
// Rendering Function
function render_products() {
    product_list.innerHTML = "";
    products.forEach(function (product) {
        const product_card = document.createElement("div");
        product_card.classList.add("product_card");
        product_card.innerHTML = `
            <h3>${product.name}</h3>
            <p>
                Price: ₹${product.price}
            </p>
        `;
        product_list.appendChild(product_card);
    });
}
// Initial Rendering
render_products();
// 2. EVENTS
add_button.addEventListener("click", function () {
    const name = product_name.value;
    const price = Number(product_price.value);
    if (name === "" || price <= 0) {
        alert("Enter valid product details");
        return;
    }
    const new_product = {
        id: products.length + 1,
        name: name,
        price: price
    };
    products.push(new_product);

    // Re-render UI
    render_products();

    // Clear input
    product_name.value = "";
    product_price.value = "";
});

// 3. STORAGE API
const user_name = document.getElementById("user_name");
const save_name_button =document.getElementById("save_name_button");
const load_name_button =document.getElementById("load_name_button");
const remove_name_button =document.getElementById("remove_name_button");
const storage_result =document.getElementById("storage_result");

// Save
save_name_button.addEventListener("click", function () {
    const name = user_name.value;
    localStorage.setItem("user_name", name);
    storage_result.textContent ="Name saved successfully";

});

// Load
load_name_button.addEventListener("click", function () {
    const saved_name=localStorage.getItem("user_name");
    if (saved_name) {
        storage_result.textContent =
            `Stored Name: ${saved_name}`;
    } else {
        storage_result.textContent =
            "No name found";
    }
});

// Remove
remove_name_button.addEventListener("click", function () {
    localStorage.removeItem("user_name");
    storage_result.textContent ="Name removed from storage";
});
// 4. HISTORY API
const home_button=document.getElementById("home_button");
const products_button=document.getElementById("products_button");
const profile_button=document.getElementById("profile_button");
const current_route=document.getElementById("current_route");
function change_route(route_name) {
    history.pushState(
        {},
        "",
        route_name
    );
    current_route.textContent=`Current Route: ${window.location.pathname}`;
}
// Home
home_button.addEventListener("click", function () {
    change_route("/home");
});

// Products
products_button.addEventListener("click", function () {
    change_route("/products");
});

// Profile
profile_button.addEventListener("click", function () {
    change_route("/profile");
});

// Browser Back / Forward
window.addEventListener("popstate", function () {
    current_route.textContent =`Current Route: ${window.location.pathname}`;
});

// Initial route
current_route.textContent =`Current Route: ${window.location.pathname}`;

// 5. MEDIA API

const camera_button = document.getElementById("camera_button");
const stop_camera_button = document.getElementById("stop_camera_button");
const microphone_button = document.getElementById("microphone_button");
const screen_button = document.getElementById("screen_button");
const record_button = document.getElementById("record_button");
const stop_record_button = document.getElementById("stop_record_button");

const camera_preview = document.getElementById("camera_preview");
const audio_preview = document.getElementById("audio_preview");
const download_recording =
    document.getElementById("download_recording");

let camera_stream = null;
let microphone_stream = null;
let screen_stream = null;

let media_recorder = null;
let recorded_chunks = [];

// Camera
camera_button.addEventListener("click", async function () {
    try {
        camera_stream =
            await navigator.mediaDevices.getUserMedia({
                video: true
            });

        camera_preview.srcObject = camera_stream;
    } catch (error) {
        console.error("Camera access failed:", error);
    }
});

// Stop Camera
stop_camera_button.addEventListener("click", function () {
    if (camera_stream) {
        camera_stream.getTracks().forEach(function (track) {
            track.stop();
        });

        camera_preview.srcObject = null;
        camera_stream = null;
    }
});

// Microphone
microphone_button.addEventListener("click", async function () {
    try {
        microphone_stream =
            await navigator.mediaDevices.getUserMedia({
                audio: true
            });

        const audio_context =
            new AudioContext();

        const source =
            audio_context.createMediaStreamSource(
                microphone_stream
            );

        const destination =
            audio_context.createMediaStreamDestination();

        source.connect(destination);

        audio_preview.srcObject =
            destination.stream;
    } catch (error) {
        console.error("Microphone access failed:", error);
    }
});

// Screen Sharing
screen_button.addEventListener("click", async function () {
    try {
        screen_stream =
            await navigator.mediaDevices.getDisplayMedia({
                video: true,
                audio: true
            });

        camera_preview.srcObject =
            screen_stream;
    } catch (error) {
        console.error("Screen sharing failed:", error);
    }
});

// Start Recording
record_button.addEventListener("click", async function () {
    if (!camera_stream) {
        camera_stream =await navigator.mediaDevices.getUserMedia({video: true,audio: true});
        camera_preview.srcObject =camera_stream;
    }
    recorded_chunks = [];
    media_recorder =new MediaRecorder(camera_stream);
    media_recorder.addEventListener("dataavailable",function (event) {
            if (event.data.size > 0) {
                recorded_chunks.push(event.data);
            }
        }
    );
    media_recorder.addEventListener(
        "stop",
        function () {
            const recorded_blob =new Blob(recorded_chunks, {type: "video/webm"});
            const recording_url =URL.createObjectURL(recorded_blob);
            download_recording.href =recording_url;
            download_recording.style.display ="inline-block";
            download_recording.textContent ="Download Recording";
        }
    );

    media_recorder.start();
});

// Stop Recording
stop_record_button.addEventListener("click", function () {
    if (
        media_recorder &&
        media_recorder.state !== "inactive"
    ) {
        media_recorder.stop();
    }
});

// # history.pushState()

// `pushState()` adds a new history entry without performing a full page reload.

// ```javascript
// history.pushState(
//     {
//         page: "profile"
//     },
//     "",
//     "/profile"
// );
// ```

// The browser URL can change while JavaScript controls the displayed content.

// This is commonly used by single-page applications.

// ---

// # history.replaceState()

// `replaceState()` changes the current history entry instead of creating a new one.

// ```javascript
// history.replaceState(
//     {
//         page: "profile"
//     },
//     "",
//     "/profile"
// );
// ```
