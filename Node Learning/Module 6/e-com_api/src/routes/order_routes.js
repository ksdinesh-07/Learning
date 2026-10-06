import express from "express";
import { order_model } from "../models/order_model.js";
//for transaction
import { product_model } from "../models/product_model.js";
import mongoose from "mongoose";

const router = express.Router();

//post the new order
router.post("/", async (req, res) => {
    const session=await mongoose.startSession();
    try {
        session.startTransaction();

        for (const item of req.body.items){
            //check the product is existes 
            const product=await product_model.findById(item.product_id).session(session);
            if(!product){
                throw new Error("Product not found");
            }

            //check the stock
            const requested_quantity=item.quantity;
            if(product.stock < requested_quantity){
                throw new Error("Insufficient product stock")
            }

            //reduce the stock after the order placed
            product.stock-=requested_quantity;
            await product.save({session});
        }
        //create the order 
        const order = await order_model.create([req.body],{session});
        //commit the transaction
        await session.commitTransaction();
        res.status(201).json({success: true,message: "Order created successfully",order: order[0]});
    } 
    catch (err){
        //rollback tha transaction
        await session.abortTransaction();
        res.status(400).json({success: false,message: err.message});
    }
    finally{
        //close the current session
        session.endSession();
    }
});

//get all order
router.get("/", async (req, res) => {
    try {
        const orders = await order_model.find().populate('user_id').populate("items.product_id");
        res.status(200).json({
            success: true,
            count: orders.length,
            orders
        });
    }
    catch(err){res.status(500).json({success: false,message: err.message});
    }
});

//get order by id
router.get("/:id", async (req, res) => {
    try {
        const order = await order_model.findById(req.params.id).populate("user_id").populate("items.product_id");
        if (!order) {
            return res.status(404).json({success: false,message: "Order not found"});
        }
        res.status(200).json({success: true,order});
    }
    catch(err){
        res.status(400).json({success: false,message: "Invalid order ID"});
    }
});

export default router;