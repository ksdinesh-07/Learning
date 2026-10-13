// // //getting the elements
// const start_button=document.getElementById("start_button");
// const api_status=document.getElementById('api_status');
// const result=document.getElementById('results');

// // used to fetch the api
// function fetch_with_delay(api_name,url,delay){
//     // creating the promise
//     const result= new Promise((resolve,reject)=>{
//         //creating the manual delay betwn each api request
//         setTimeout(async() => {
//             try{
//                 const response=await fetch(url);
//                 //check the http request was successfull
//                 if(!response.ok){
//                     throw new Error(`${api_name} request failed`);
//                 }
//                 //getting data from response 
//                 const data=await response.json();
//                 //if success send api_name and data
//                 resolve({
//                     api_name:api_name,
//                     data:data
//                 });
//             }catch(err){
//                 // if fails
//                 reject({
//                     api_name:api_name,
//                     error:err.message
//                 });
//             }
//         }, delay);
//     })
//     return result;
// }

async function start_requests(){
    api_status.innerHTML=''
    result.innerHTML=''
    const successful_result=[];

    const api_requests=[
        fetch_with_delay("user API","https://jsonplaceholder.typicode.com/users",4000),
        fetch_with_delay("Posts API","https://jsonplaceholder.typicode.com/posts",1500),
        fetch_with_delay("todos API","https://jsonplaceholder.typicode.com/todos",3000)
    ]
    api_requests.forEach((api_request)=>{
        api_request.then((res)=>{
            api_status.innerHTML+=`<p> ${res.api_name} ---> success </p>`;
            if (successful_result.length <2){
                successful_result.push(res);
                console.log("successfull results:",successful_result);
                display_result(res);
            }
        })
        .catch((err)=>{
            api_status.innerHTML+=`<p> ${err.api_name}---> failed </p>`;

        });
    });
}

function display_result(response){
    const result_element=document.createElement('div');
    const sample_records=response.data.slice(0,5);
    result_element.innerHTML=`<h3>${response.api_name}</h3>
                            <pre>${JSON.stringify(sample_records,null,2)}</pre>`;
    result.appendChild(result_element);

}

start_button.addEventListener('click',start_requests);

const start_button =document.getElementById("start_button");
const api_status= document.getElementById("api_status");
const result =document.getElementById("results");

// function fetch_api(api_name,url){
//     const result = new Promise(async (resolve, reject) => {
//         try{
//             const response = await fetch(url);
//             if (!response.ok) {
//                 throw new Error(`${api_name} request failed`);
//             }
//             const data = await response.json();
//             resolve({
//                 api_name: api_name,
//                 data: data
//             });
//         }catch(err){
//             reject({
//                 api_name: api_name,
//                 error: err.message
//             });
//         }
//     });
//     return result;
// }

// function start_requests() {
//     api_status.innerHTML = ""
//     result.innerHTML= ""
//     const successful_result = [];
//     const api_requests = [
//         fetch_api("User API","https://jsonplaceholder.typicode.com/users"),
//         fetch_api("Posts API","https://jsonplaceholder.typicode.com/posts"),
//         fetch_api("Todos API","https://jsonplaceholder.typicode.com/todos")
//     ];
//     api_requests.forEach((api_request) => {
//         api_request
//             .then((res) => {
//                 api_status.innerHTML +=`<p>${res.api_name} ---> success</p>`;
//                 if (successful_result.length < 2) {
//                     successful_result.push(res);
//                     console.log("Successful results:",successful_result);
//                     display_result(res);
//                 }
//             })
//             .catch((err) => {
//                 api_status.innerHTML += `<p>${err.api_name} ---> failed: ${err.error}</p>`;
//             });
//     });
// }

// function display_result(response) {
//     const result_element = document.createElement("div");
//     const sample_records = response.data.slice(0, 5);
//     result_element.innerHTML = `
//         <h3>${response.api_name}</h3>
//         <pre>${JSON.stringify(sample_records, null, 2)}</pre>`;
//     result.appendChild(result_element);
// }

// start_button.addEventListener("click", start_requests);