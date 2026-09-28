const local_key_input = document.getElementById("local_key");
const local_value_input = document.getElementById("local_value");

const session_key_input = document.getElementById("session_key");
const session_value_input = document.getElementById("session_value");

const cookie_key_input = document.getElementById("cookie_key");
const cookie_value_input = document.getElementById("cookie_value");

const storage_output = document.getElementById("storage_output");


//local
document
    .getElementById("set_local_button")
    .addEventListener("click", () => {
        const key = local_key_input.value;
        const value = local_value_input.value;
        if (!key) {
            alert("Enter a localStorage key");
            return;
        }
        localStorage.setItem(key, value);
        display_storage();
    });


document
    .getElementById("get_local_button")
    .addEventListener("click", () => {
        const key = local_key_input.value;
        const value = localStorage.getItem(key);
        alert(`Value: ${value}`);
    });

document
    .getElementById("delete_local_button")
    .addEventListener("click", () => {
        const key = local_key_input.value;
        localStorage.removeItem(key);
        display_storage();
    });


document
    .getElementById("clear_local_button")
    .addEventListener("click", () => {
        localStorage.clear();
        display_storage();
    });


//session storage

document
    .getElementById("set_session_button")
    .addEventListener("click", () => {
        const key = session_key_input.value;
        const value = session_value_input.value;
        if (!key) {
            alert("Enter a sessionStorage key");
            return;
        }
        sessionStorage.setItem(key, value);
        display_storage();
    });

document
    .getElementById("get_session_button")
    .addEventListener("click", () => {
        const key = session_key_input.value;
        const value = sessionStorage.getItem(key);
        alert(`Value: ${value}`);
    });

document
    .getElementById("delete_session_button")
    .addEventListener("click", () => {
        const key = session_key_input.value;
        sessionStorage.removeItem(key);
        display_storage();
    });

document
    .getElementById("clear_session_button")
    .addEventListener("click", () => {
        sessionStorage.clear();
        display_storage();

    });

//cookies
document
    .getElementById("set_cookie_button")
    .addEventListener("click", () => {
        const key = cookie_key_input.value;
        const value = cookie_value_input.value;
        if (!key) {
            alert("Enter a cookie key");
            return;
        }
        document.cookie =
            `${encodeURIComponent(key)}=${encodeURIComponent(value)}; max-age=3600; path=/; SameSite=Lax`;
        display_storage();
    });


document
    .getElementById("get_cookie_button")
    .addEventListener("click", () => {
        const key = cookie_key_input.value;
        const value = get_cookie(key);
        alert(`Value: ${value}`);
    });


document
    .getElementById("delete_cookie_button")
    .addEventListener("click", () => {
        const key = cookie_key_input.value;
        document.cookie =`${encodeURIComponent(key)}=; max-age=0; path=/`;
        display_storage();
    });


document
    .getElementById("clear_cookie_button")
    .addEventListener("click", () => {
        const cookies = document.cookie.split("; ");
        cookies.forEach((cookie) => {
            const separator_index = cookie.indexOf("=");
            const key = cookie.substring(0, separator_index);
            document.cookie =`${key}=; max-age=0; path=/`;
        });
        display_storage();
    });

//get cookie
function get_cookie(cookie_name) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
        const separator_index = cookie.indexOf("=");
        const key = decodeURIComponent(
            cookie.substring(0, separator_index)
        );
        const value = decodeURIComponent(
            cookie.substring(separator_index + 1)
        );
        if (key === cookie_name) {
            return value;
        }
    }
    return null;
}

//display storage
function display_storage() {
    const local_storage_data = {};
    for (let index = 0; index < localStorage.length; index++) {
        const key = localStorage.key(index);
        local_storage_data[key] =localStorage.getItem(key);
    }

    const session_storage_data = {};
    for (let index = 0; index < sessionStorage.length; index++) {
        const key = sessionStorage.key(index);
        session_storage_data[key] =sessionStorage.getItem(key);
    }

    const cookie_data = {};
    const cookies = document.cookie.split("; ");
    cookies.forEach((cookie) => {
        if (!cookie) {
            return;
        }
        const separator_index = cookie.indexOf("=");
        const key = decodeURIComponent(cookie.substring(0, separator_index));
        const value = decodeURIComponent(cookie.substring(separator_index + 1));
        cookie_data[key] = value;
    });


    const storage_data = {
        local_storage: local_storage_data,
        session_storage: session_storage_data,
        cookies: cookie_data
    };
    storage_output.textContent =JSON.stringify(storage_data, null, 4);
}

document
    .getElementById("refresh_storage_button")
    .addEventListener("click", display_storage);

display_storage();
