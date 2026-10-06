import express from "express";
import bcrypt from "bcrypt";
import { user_model } from "../models/user_model.js";
import jwt from "jsonwebtoken";
import rate_limit from "express-rate-limit";

const router=express.Router();

const login_rate_limiter=rate_limit({
    windowMs:15 * 60 * 1000,
    limit :5,
    message:{
        success:false,
        message:"Too many login attempts, Please try again later"
    }
})


//user registration 
router.post('/register',async (req,res)=>{
    try{
        const {name,email,password,phone}=req.body;

        //check the user exixts
        const existing_user=await user_model.findOne({email});
        if(existing_user){
            return res.status(409).json({success:false,message:"Email already registered"})
        }

        //hasing the passsword
        const hashed_password=await bcrypt.hash(password,10);
        //creating the user with the hased pass
        const user=await user_model.create({name,email,password:hashed_password,phone})

        res.status(201).json({success:true,message:"User registration successfully",user:{
            id:user._id,
            name:user.name,
            email:user.email,
            phone:user.phone,
            role:user.role
        }})
    }
    catch(err){
        res.status(400).json({success:false,message:err.message});
    }
})

//user login
router.post('/login',login_rate_limiter,async (req,res)=>{
    try{
        const {email,password}=req.body;
        //getting the user data for login 
        const user=await user_model.findOne({email}).select("+password");
        if (!user){
            return res.status(401).json({success:false,message:"Invalid email or password"});
        }

        //comparing the password
        const password_match=await bcrypt.compare(password,user.password);
        if(!password_match){
            return res.status(401).json({success:false,message:"Invalid email or password"});
        }

        const token=jwt.sign(
        //payload
        {
            user_id:user._id,
            role:user.role
        },
        //secrete key
        process.env.JWT_SECRET,
        //expiration
        {
            expiresIn:"15m"
        }
        )

        res.status(200).json({success:true,message:"Login successful",token:token,user:{id:user._id,name:user.name,email:user.email,phone:user.phone,role:user.role}})
    }
    catch(err){
        res.status(500).json({success:false,message:"Login failed"})
    }
})



export default router;