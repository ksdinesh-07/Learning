const socket = io();
const user_name =document.getElementById("user_name");
const message_input =document.getElementById("message_input");
const send_button =document.getElementById("send_button");
const message_list =document.getElementById("message_list");
const online_users =document.getElementById("online_users");

socket.on("online_users", function (user_count) {
    online_users.textContent = user_count;
});

send_button.addEventListener("click", function () {
    const name =user_name.value.trim();
    const message =message_input.value.trim();

    if (name === "" || message === "") {
        alert("Enter your name and message");
        return;
    }

    const message_data = {
        user_name: name,
        message: message,
        sent_at: new Date().toLocaleTimeString()
    };
    socket.emit(
        "chat_message",
        message_data
    );
    message_input.value = "";

});


socket.on(
    "receive_message",
    function (message_data) {
        const message_element =document.createElement("div");
        message_element.classList.add(
            "message"
    );

        const name_element =document.createElement("strong");
        name_element.textContent=message_data.user_name;
        const message_text =document.createElement("span");
        message_text.textContent =message_data.message;

        const time_element=document.createElement("small");
        time_element.textContent =message_data.sent_at;
        message_element.appendChild(name_element);
        message_element.appendChild(message_text);
        message_element.appendChild(time_element);

        message_list.appendChild(message_element);
        message_list.scrollTop =message_list.scrollHeight;
    }
);