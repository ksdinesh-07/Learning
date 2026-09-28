const users = [
    {
        user_id: 1,
        user_name: "Dinesh",
        email: "dinesh@example.com"
    },
    {
        user_id: 2,
        user_name: "Arul",
        email: "arul@example.com"
    }
];

export function get_user(user_id) {
    return users.find((user) => user.user_id === user_id);
}