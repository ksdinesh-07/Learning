import express from "express";
import { product_model } from "../models/product_model.js";
import { auth_middleware } from "../middleware/auth_middleware.js";
import { admin_middleware } from "../middleware/role_middleware.js";
import redis_client from "../config/redis.js";

const router=express.Router();

const products_cache_key = "products";
const products_lock_key = "products:lock";

//get method to retrieve the data from the database model 
router.get("/",async (req,res)=>{
    try{
        //redis cache 
        const cached_products = await redis_client.get(products_cache_key);
        if (cached_products) {
            console.log("Cache HIT : ",products_cache_key);
            //get cache
            const cached_data = JSON.parse(cached_products);
            return res.status(200).json(cached_data);
        }
        console.log("Cache MISS : ",products_cache_key);
        //lock result
        const lock_acquired = await redis_client.set(products_lock_key,"1",
            {
                NX: true,
                EX: 10
            }
        );
        //check the req got lock
        if(!lock_acquired){
            console.log("Another request is rebuilding the cache");
            //gave 5 attempts
            for (let retry_count = 0; retry_count < 5; retry_count++) {
                //retry for every 100ms
                await new Promise((resolve) => setTimeout(resolve, 100));
                const retry_cached_products = await redis_client.get(products_cache_key);
                if (retry_cached_products) {
                    console.log("Cache HIT after waiting");
                    return res.status(200).json(
                        JSON.parse(retry_cached_products)
                    );
                }
            }
            return res.status(503).json({success: false,message: "Cache is still being rebuilt. Please try again."});        
        }
        try{
            const products=await product_model.find();
            const response_data ={success: true,count: products.length,products};
            //set cache
            await redis_client.setEx(products_cache_key,60,JSON.stringify(response_data));
            res.status(200).json(response_data);
        }
        finally{
            await redis_client.del(products_lock_key);
        }    
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
        await redis_client.del("products");
        res.status(201).json({success:true,message:"Product created successfully",product})
    }
    catch(err){
        res.status(400).json({success:false,message:err.message})
    }
})

//delete the product
router.delete('/:id',auth_middleware,admin_middleware,async (req,res)=>{
    try{
        const product=await product_model.findByIdAndDelete(req.params.id);
        if (!product){
            return res.status(404).json({success:false,message:"Product not found"});
        }
        await redis_client.del("products");
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
            await redis_client.del("products");
            res.status(200).json({success:true,message:"Product updated successfully",product});
    }catch(err){
        res.status(400).json({success:false,message:err.message})
    }
})

export default router;

