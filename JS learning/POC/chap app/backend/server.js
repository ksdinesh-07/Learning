import express, { response } from "express";
import cors from "cors";
import {createServer, request} from "node:http";
import { Server } from "socket.io";
import { register_user,get_user,login_user,send_message,get_messages } from "./services/chat_service.js";

const app=express();
const http_server=createServer(app);
const io=new Server(http_server,{
    cors:{
        origin:"*"
    }
});

const port=5000;
app.use(cors());
app.use(express.json());

app.get("/",(request,response)=>{
    response.json({
        message:"Chat App backend is running"
    });
})

app.get("/api/health",(request,response)=>{
    response.json({
    status:"success",
    message:"Server is healthy"
    })
})

app.post("/api/auth/register",async (request,response,next)=>{
    try{
        const user=await register_user(request.body);
        response.status(201).json({
            success:true,
            user
        })
    }
    catch(err){
        next(err)
    }
})

app.get('/api/users',(request,response)=>{
    response.json({
        success:true,
        users:get_user()
    })
})

app.post("/api/auth/login",async (request,response,next)=>{
    try{
        const user=await login_user(request.body);
        response.json({success:true,user})
    }
    catch(err){
        next(err)
    }
})

app.post("/api/messages",(request,response,next)=>{
    try{
        const new_message=send_message(request.body);
        response.status(201).json({
            success:true,
            message:new_message
        })
    }catch(err){
        next(err);
    }
})

app.get("/api/messages/:user_id/:other_user_id",(request,response,next)=>{
    try{
        const user_id=Number(request.params.user_id);
        const other_user_id=Number(request.params.other_user_id);
        const messages=get_messages(user_id,other_user_id);
        response.json({success:true,messages:messages});
    }catch(err){
        next(err);
    }
})

io.on("connection",(socket)=>{
    console.log("User Connected:",socket.id);
    socket.on("disconnect",()=>{
        console.log('User Disconnected:',socket.id);
    });
})

app.use((error,request,response,next)=>{
    const status_code=error.status_code || 500;

    response.status(status_code).json({
        success:false,
        message: error.message || "Internal server error"
    })
})


http_server.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
});

