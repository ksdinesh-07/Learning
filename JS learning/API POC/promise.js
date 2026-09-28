//sequential code
async function get_data_sequentially() {
    const user_response = await fetch("https://jsonplaceholder.typicode.com/users");
    const user_data = await user_response.json();
    console.log("Users:", user_data);

    const post_response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const post_data = await post_response.json();
    console.log("Posts:", post_data);

    const todo_response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todo_data = await todo_response.json();
    console.log("Todos:", todo_data);
}
//wait for each
get_data_sequentially();

//promise all
const promise_1 = Promise.resolve("User data");
const promise_2 = Promise.reject("Product data");
const promise_3 = Promise.resolve("Order data");

Promise.all([promise_1, promise_2, promise_3])
    .then((results) => {
        console.log(results);
    })
    .catch((err)=>{
        console.log(err);
    })

//promise all

//they dont wait for each other
const user_request = fetch("https://jsonplaceholder.typicode.com/users");
const post_request = fetch("https://jsonplaceholder.typicode.com/posts");
const todo_request = fetch("https://jsonplaceholder.typicode.com/todos");

//concurrent
Promise.all([user_request,post_request,todo_request])
.then((responses) => {
    console.log(responses);
})
.catch((error) => {
    console.log(error);
});



//concurrent
async function get_all_data() {
    const user_request = fetch("https://jsonplaceholder.typicode.com/users");
    const post_request = fetch("https://jsonplaceholder.typicode.com/posts");
    const todo_request = fetch("https://jsonplaceholder.typicode.com/todos");

    const responses = await Promise.all([
        user_request,
        post_request,
        todo_request
    ]);
    console.log(responses);
}

//concurrent processing of api
//using then catch
//api 1
user_request
    .then((response) => response.json())
    .then((data) => {
        console.log("Users:", data);
    })
    .catch((error) => {
        console.log("Users API failed:", error);
    });

//api 2
post_request
    .then((response) => response.json())
    .then((data) => {
        console.log("Posts:", data);
    })
    .catch((error) => {
        console.log("Posts API failed:", error);
    });

// api3    
todo_request
    .then((response) => response.json())
    .then((data) => {
        console.log("Todos:", data);
    })
    .catch((error) => {
        console.log("Todos API failed:", error);
    });

//all three fetch() calls are executed without waiting for each other


// using async await
async function process_users() {
    try {
        const response = await fetch(users_url);
        const data = await response.json();
        console.log("Users:", data);
    } catch (error) {
        console.log("Users API failed:", error);
    }
}

async function process_posts() {
    try {
        const response = await fetch(posts_url);
        const data = await response.json();
        console.log("Posts:", data);
    } catch (error) {
        console.log("Posts API failed:", error);
    }
}

async function process_todos() {
    try {
        const response = await fetch(todos_url);
        const data = await response.json();
        console.log("Todos:", data);
    } catch (error) {
        console.log("Todos API failed:", error);
    }
}

//they running concurrently without waiting for others
process_users();
process_posts();
process_todos();


// if we call like this
await process_users();
await process_posts();
await process_todos();
//they running in sequential because they wait for the previous one


//promise.allsetteled
//sequential
Promise.allSettled([user_request,post_request,todo_request])
.then(async (results) => {
    for (const result of results) {
        if (result.status === "fulfilled") {
            const response = result.value;
            if (!response.ok) {
                console.log("API failed with status:",response.status);
                continue;
            }
            const data = await response.json();
            console.log("API success:");
            console.log(data);
        }

        else if (result.status === "rejected") {
            console.log("API failed:");
            console.log(result.reason);
        }
    }
})
.catch((error) => {
    console.log("Unexpected error:", error);
});


//returns the first sucess api ignores the failed
const result = await Promise.any([user_request,post_request,todo_request]);