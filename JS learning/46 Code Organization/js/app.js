import { load_user } from "./controller/user_controller.js";

const load_user_button = document.getElementById("load_user_button");
load_user_button.addEventListener("click", () => {
    load_user(1);
});