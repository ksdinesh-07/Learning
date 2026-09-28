import fs from "node:fs";
import path from "node:path";
import bcrypt from "bcrypt";
import { fileURLToPath } from "node:url";
import { app_error } from "../utils/errors.js";

const file_name=fileURLToPath(import.meta.url);
const directory_name=path.dirname(file_name);
const users_file_path=path.join(directory_name, "../data/users.json");
const messages_file_path=path.join(directory_name, "../data/messages.json");

function load_users() {
    const users_data=fs.readFileSync(users_file_path,"utf-8");
    return JSON.parse(users_data);
}

function save_users(users) {
    fs.writeFileSync(users_file_path,JSON.stringify(users,null,4) );
}

function load_messages() {
    const messages_data=fs.readFileSync(messages_file_path,"utf-8");
    return JSON.parse(messages_data);
}

function save_messages(messages) {
    fs.writeFileSync(messages_file_path,JSON.stringify(messages, null, 4));
}

function get_next_user_id(users) {
    if (users.length === 0) {
        return 1;
    }
    return (Math.max(...users.map(user => user.user_id)) + 1);
}

function get_next_message_id(messages) {
    if (messages.length === 0) {
        return 1;
    }
    return(Math.max(...messages.map(message => message.message_id)) + 1);
}

export async function register_user({user_name,email,password}) 
{
    const users = load_users();
    user_name = String(user_name).trim();
    email = String(email).trim().toLowerCase();
    password = String(password);

    if (user_name.length < 3) {
        throw new app_error("Username must contain at least 3 characters",400);
    }

    if (!email.includes("@")) {
        throw new app_error("Enter a valid email",400);
    }

    if (password.length < 6) {
        throw new app_error("Password must contain at least 6 characters",400);
    }

    const existing_user=users.find(user => user.email === email);
    if (existing_user) {
        throw new app_error("Email already registered",409);
    }

    const password_hash=await bcrypt.hash(password,10);

    const next_user_id=get_next_user_id(users);
    const user = {
        user_id: next_user_id,
        user_name,
        email,
        password_hash,
        online_status: false,
        created_at: new Date().toISOString()
    };
    users.push(user);
    save_users(users);
    console.log("User registered:", user);

    return {
        user_id: user.user_id,
        user_name: user.user_name,
        email: user.email,
        online_status: user.online_status,
        created_at: user.created_at
    };
}

export async function login_user({email,password}) {
    const users = load_users();
    email = String(email).trim().toLowerCase();
    password = String(password);
    
    const user=users.find(user => user.email === email);
    if (!user) {
        throw new app_error("Invalid email or password",401);
    }

    const password_matches=await bcrypt.compare(password,user.password_hash)

    if (!password_matches) {
        throw new app_error("Invalid email or password",401);
    }
    
    return {
        user_id: user.user_id,
        user_name: user.user_name,
        email: user.email,
        online_status: user.online_status,
        created_at: user.created_at
    };
}

export function get_user() {
    const users = load_users();
    return users.map(user => ({
        user_id: user.user_id,
        user_name: user.user_name,
        email: user.email,
        online_status: user.online_status,
        created_at: user.created_at
    }));
}

export function send_message({sender_id,receiver_id,message}) {
    const users = load_users();
    const messages = load_messages();
    message = String(message).trim();
    if (!message) {
        throw new app_error("Message cannot be empty",400);
    }

    const sender=users.find(user => user.user_id === sender_id);
    const receiver=users.find(user => user.user_id === receiver_id);
    if (!sender) {
        throw new app_error("Sender not found",404);
    }

    if (!receiver) {
        throw new app_error("Receiver not found",404);
    }

    const next_message_id=get_next_message_id(messages);
    const new_message = {
        message_id: next_message_id,
        sender_id,
        receiver_id,
        message,
        created_at: new Date().toISOString()
    };

    messages.push(new_message);
    save_messages(messages);
    return new_message;
}

export function get_messages(user_id,other_user_id){
    const messages=load_messages();
    return messages.filter(message=>(message.sender_id===user_id && message.receiver_id===other_user_id) || (message.sender_id===other_user_id && message.receiver_id===user_id));
}