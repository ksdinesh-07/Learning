function fetch_with_delay(api_name,url,delay){
    // creating the promise
    const result= new Promise((resolve,reject)=>{
        //creating the manual delay betwn each api request
        setTimeout(async() => {
            try{
                const response=await fetch(url);
                //check the http request was successfull
                if(!response.ok){
                    throw new Error(`${api_name} request failed`);
                }
                //getting data from response 
                const data=await response.json();
                //if success send api_name and data
                resolve({
                    api_name:api_name,
                    data:data
                });
            }catch(err){
                // if fails
                reject({
                    api_name:api_name,
                    error:err.message
                });
            }
        }, delay);
    })
    return result;
}
