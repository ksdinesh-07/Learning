import {get_user,remove_user} from "./storage.js";
import {api_request} from "./api.js";

const logged_in_user=get_user();
if (!logged_in_user) {window.location.href="./login.html";}

const logged_in_user_element=document.getElementById("logged_in_user")
const logout_button=document.getElementById("logout_button");
const user_list=document.getElementById("user_list");
const message_list=document.getElementById("message_list");
const message_form=document.getElementById("message_form")
const message_input=document.getElementById("message_input");

logged_in_user_element.textContent=logged_in_user.user_name;
logout_button.addEventListener("click",() => {
    remove_user();
    window.location.href="./login.html";
    }
);


let selected_user = null;
async function load_users() {
    try {
        const result=await api_request("/users");
        display_users(result.users);
    } 
    catch (error) {
        console.error("Failed to load users:",error);
    }
}

function display_users(users){
    user_list.innerHTML= "";
    users.forEach(user => {
        if (user.user_id ===logged_in_user.user_id){
            return;
        }

        const user_element=document.createElement("div");
        user_element.textContent=user.user_name;
        user_element.className="user_item";
        user_element.addEventListener("click",() => {
                select_user(user);
            }
        )
        user_list.appendChild(user_element);
    });
}

async function select_user(user){
    selected_user = user;
    const selected_user_element=document.getElementById("selected_user");
    selected_user_element.textContent=user.user_name;
    message_list.innerHTML = "";

    try{
        const result=await api_request(`/messages/${logged_in_user.user_id}/${user.user_id}`);
        console.log('Conversation:',result.messages);
        console.log(result)
        result.messages.forEach(message=>{
            display_message(message);
        })
    }
    catch(err){
        console.log('Failed to load messages:');
    }
    console.log("Selected user:",selected_user);
}

message_form.addEventListener("submit",async(event) => {
        event.preventDefault();
        if (!selected_user) {
            alert("Please select a user");
            return;
        }
        const message=message_input.value.trim();
        if (!message) {
            return;
        }

        try{
            const result=await api_request("/messages",{
                method: "POST",
                body: JSON.stringify({
                    sender_id:logged_in_user.user_id,
                    receiver_id:selected_user.user_id,
                    message
                })
            });
            console.log("Message sent:",result.message);
            display_message(result.message);
            message_input.value = "";
            message_input.focus();
        } 
        catch(error){
            console.error("Failed to send message:",error);
        }
    });

function display_message(message) {
    const message_element=document.createElement("div");
    message_element.textContent=message.message;
    message_element.className="message_item";
    message_list.appendChild(message_element);
    message_list.scrollTop=message_list.scrollHeight;
}

load_users();

