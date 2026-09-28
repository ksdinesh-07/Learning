import { get_user } from "../model/user_model.js";
import { display_user } from "../view/user_view.js";

export function load_user(user_id) {
    const user = get_user(user_id);
    if (!user) {
        return;
    }
    display_user(user);
}