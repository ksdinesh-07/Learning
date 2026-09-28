const user_container = document.getElementById("user_container");

export function display_user(user) {
    user_container.innerHTML = `
        <h2>${user.user_name}</h2>
        <p>${user.email}</p>
    `;
}