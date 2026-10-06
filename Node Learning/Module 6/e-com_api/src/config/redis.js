import {createClient} from "redis";

const redis_client=createClient({url:process.env.REDIS_URL});
redis_client.on("error",(err)=>{
    console.log("Redis connection error:",error.message)
})

export const connect_redis=async()=>{
    await redis_client.connect();
    console.log("Redis connected successsfully!")
}

export default redis_client;