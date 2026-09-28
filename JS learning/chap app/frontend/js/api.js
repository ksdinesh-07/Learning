const api_base_url='http://localhost:5000/api';

export async function api_request(endpoint,options={}) {
    const response=await fetch(`${api_base_url}${endpoint}`,{
        headers:{
            "Content-Type": "application/json"
        },
        ...options
    })
    const data=await response.json();
    if(!response.ok){
        throw new Error(data.message);
    }
    return data;
}

