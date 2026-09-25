const {get_user} = require("../src/user_service.js");

test("get user from API", async () => {
    global.fetch=jest.fn();
    fetch.mockResolvedValue({
        json: async () => {
            return {
                user_id: 101,
                user_name: "Dinesh",
                account_status: "active"
            };
        }
    });

    const user_data=await get_user(101);
    console.log(user_data);
    expect(user_data.user_id).toBe(101);
    expect(user_data.user_name).toBe("Dinesh");
    expect(user_data.account_status).toBe("active");
    expect(fetch).toHaveBeenCalledTimes(1);
});