import express from "express";
import { product_model } from "../models/product_model.js";
import { auth_middleware } from "../middleware/auth_middleware.js";

const router=express.Router();

//get method to retrieve the data from the database model 
router.get("/",async (req,res)=>{
    try{
        const products=await product_model.find();
        res.status(200).json({success:true,count:products.length,products})
    }catch(err){
        res.status(500).json({success:false,message:err.message});
    }
})

//get the particular product by id
router.get('/:id',async(req,res)=>{
    try{
        const product = await product_model.findById(req.params.id);
        if (!product){
            return res.status(404).json({success:false,message:"Product not found"});
        }
        res.status(200).json({success:true,product})
    }
    catch(err){
        res.status(400).json({success:false,message:"Invalid product ID"})
    }
})

//post method to create the data 
router.post('/',async(req,res)=>{
    try{
        const product=await product_model.create(req.body);
        res.status(201).json({success:true,message:"Product created successfully",product})
    }
    catch(err){
        res.status(400).json({success:false,message:err.message})
    }
})

//delete the product
router.delete('/:id',auth_middleware,async (req,res)=>{
    try{
        const product=await product_model.findByIdAndDelete(req.params.id);
        if (!product){
            return res.status(404).json({success:false,message:"Product not found"});
        }
        res.status(200).json({success:true,message:"Product deleted successfully",product});
    }catch(err){
        res.status(400).json({success:false,message:"Invalid Product ID"});
    }
})

//put method to insert the data
router.put("/:id",async (req,res)=>{
    try{
        const product=await product_model.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});
            if(!product){
                return res.status(404).json({success:false,message:"Product not found"})
            }
            res.status(200).json({success:true,message:"Product updated successfully",product});
    }catch(err){
        res.status(400).json({success:false,message:err.message})
    }
})

export default router;

