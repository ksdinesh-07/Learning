import order from '../models/order.js'

export const create_order=async (order_data)=>{
    const new_order=new order(order_data);
    return await new_order.save();
}

export const get_all_orders=async()=>{
    return await order.find().sort({createdAt:-1});
}