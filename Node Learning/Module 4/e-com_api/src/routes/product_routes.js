import express, { Router } from "express";
import { product_model } from "../models/product_model.js";

const router=express.Router();

//get method to retrieve the data from the database model 
router.get("/",async (req,res)=>{
    try{
        const products=await product_model.find();
        res.status(200).json({success:true,count:products})
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
        res.status(400).json()({success:false,message:"Invalid product ID"})
    }
})

//post method to insert the data 
router.post('/',async(req,res)=>{
    try{
        const product=await product_model.create(req.body);
        res.status(201).json({success:true,message:"Product created successfully",product})
    }
    catch(err){
        res.status(400).json({success:false,message:err.message})
    }
})

//post method to insert new data 
router.post('/:id',async(req,res)=>{
    try{
        const product=await product_model.findByIdAndUpdate(req.params.is,req.body,{
            new:true,
            runValidators:true
        });
        if(!product){
            res.status(404).json({success:false,message:"Product not found"});
        }
        res.status(200).json({success:true,message:"Producr updated Successfully"});
    }
    catch(err){
        res.status(400).json({success:false,message:err.message});
    }
})

//delete the product
router.delete('/:id',async (req,res)=>{
    try{
        const product=await product_model.findByIdAndDelete(req.params.id);
        if (product){
            return res.status(404).json({success:true,message:"Product not found"});
        }
        res.status(200).json({success:true,message:"Product deleted successfully",product});
    }catch(err){
        res.status(400).json({success:true,message:"Invalid Product ID"});
    }
})

//post method to update the data
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

