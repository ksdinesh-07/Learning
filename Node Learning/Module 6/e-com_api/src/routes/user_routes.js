import express from "express";
import { user_model } from "../models/user_model.js";

const router = express.Router();

//to post the new user data
router.post("/", async (req, res) => {
    try {
        const user = await user_model.create(req.body);
        res.status(201).json({success: true,message: "User created successfully",user});
    } 
    catch (err) {
        res.status(400).json({success: false,message: err.message});
    }
});

// to fetch all user details
router.get('/', async (req,res)=>{
    try{
        const users=await user_model.find();
        res.status(200).json({success:true,count:users.length,users});
    }
    catch(err){
        res.status(500).json({success:false,message:err.message})
    }
})

// to get the user by id
router.get('/:id',async (req,res)=>{
    try{
        const user=await user_model.findById(req.params.id);
        if (!user){
            return res.status(404).json({success:false,message:"User Not found"});
        }
        res.status(200).json({success:true,user})
    }catch(err){
        res.status(500).json({success:false,message:err.message})
    }
})

//put method to update user
router.put('/:id',async (req,res)=>{
    try{
        const user=await user_model.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
        if(!user){
            return res.status(404).json({success:false,message:"User not found"})
        }
        res.status(200).json({success:true,message:"User updated successfully",user})
    }catch(err){
        res.status(500).json({success:false,message:err.message})
    }
})

//delete the new user
router.delete("/:id",async(req,res)=>{
    try{
        const user=await user_model.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(404).json({success:false,message:"User not found"})
        }
        res.status(200).json({success:true,message:"User Deleted successfully"})
    }
    catch(err){
        res.status(400).json({success:false,message:"Invalid user ID"})
    }
})

export default router;