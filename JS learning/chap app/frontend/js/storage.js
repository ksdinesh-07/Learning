
const user_storage_key="chat_app_user";

export function save_user(user){
    localStorage.setItem(user_storage_key,JSON.stringify(user));
}

export function get_user(){
    const user_data=localStorage.getItem(user_storage_key);
    if(!user_data){
        return null;
    }
    return JSON.parse(user_data);
}

export function remove_user(){
    localStorage.removeItem(user_storage_key)
}