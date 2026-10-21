import * as order_service from '../services/order_service.js'

export const create_order=async(req,res,next)=>{
    try{
        const save_order=await order_service.create_order(req.body);
        res.status(201).json({message:'Order created Successfully',Order:save_order})
    }catch(err){
        next(err);
    }
}

export const get_order=async(req,res,next)=>{
    try{
        const orders=await order_service.get_all_orders();
        res.status(200).json(orders)
    }catch(err){
        next(err);
    }
}

