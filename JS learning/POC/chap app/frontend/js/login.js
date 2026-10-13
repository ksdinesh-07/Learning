import { api_request } from "./api.js";
import { save_user } from "./storage.js";


const login_form=document.getElementById("login_form");
const form_message=document.getElementById("form_message");

login_form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email=document.getElementById("email").value.trim();
    const password=document.getElementById("password").value;

    try {
        const result = await api_request("/auth/login",
            {
                method: "POST",
                body: JSON.stringify({
                    email,
                    password
                })
            });
        save_user(result.user);
        window.location.href="./chat.html";
        console.log("Logged in user:", result.user);
        form_message.textContent="Login successful";
    } 
    catch (error) {
        console.error(error);
        form_message.textContent=error.message;
    }
});