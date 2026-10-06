import jwt from "jsonwebtoken";
import { Schema } from "mongoose";

export const auth_middleware=(req,res,next)=>{
    const auth_header=req.headers.authorization;
    if (!auth_header){
        return res.status(401).json({success:false,message:"Authorization header missing"})
    }

    //checking the bearer format
    const [scheme,token]=auth_header.split(" ");
    if(scheme !== "Bearer" || !token ){
        return res.status(401).json({success:false,message:"Invalid authorization format"})
    }

    try{
        const decoded_token=jwt.verify(token,process.env.JWT_SECRET);
        req.user=decoded_token;
        next();
    }
    catch(err){
        return res.status(401).json({success:false,message:"Invalid or expired tokenn"})
    }
}