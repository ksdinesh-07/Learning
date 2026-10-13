import { api_request } from "./api.js";

const register_form = document.getElementById("register_form");
const form_message = document.getElementById("form_message");

register_form.addEventListener("submit",async(event) => {
    event.preventDefault();
    const username=document.getElementById("username").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;

    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

    try{
        const result=await api_request("/auth/register",{
            method:"POST",
            body:JSON.stringify({
                user_name:username,
                email,
                password
            })
        })
        console.log("Registered user :",result.user);
        form_message.textContent="Registration form submitted";
        register_form.reset();

    }catch(err){
        console.error(err);
        form_message.textContent=err.message;
    }

});