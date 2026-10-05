import express from "express";
import "dotenv/config";
import {connect_db} from "./config/database.js";
import product_routes from './routes/product_routes.js'
import user_routes from './routes/user_routes.js';
import order_routes from './routes/order_routes.js';
import auth_routes from './routes/auth_routes.js'

const app=express()
const port=process.env.PORT || 5000;
console.log(process.env.PORT);
console.log(process.env.MONGODB_URI);


app.use(express.json());

app.use("/api/products",product_routes);
app.use("/api/users",user_routes);
app.use("/api/orders",order_routes);
app.use("/api/auth",auth_routes);

app.get('/',(req,res)=>{
    res.json({success:true,message:"E-com API is running"});    
})  

await connect_db();

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})