async function get_user(user_id) {
    const response=await fetch(``);
    const user_data=await response.json();
    return user_data;
}

module.exports = {get_user};