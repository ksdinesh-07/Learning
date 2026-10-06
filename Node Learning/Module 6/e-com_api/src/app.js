import express from "express";
import helmet from "helmet";
import cors from "cors";

// import redis_client from "./config/redis.js";
import product_routes from "./routes/product_routes.js";
import user_routes from "./routes/user_routes.js";
import order_routes from "./routes/order_routes.js";
import auth_routes from "./routes/auth_routes.js";

const allowed_origins = ["http://127.0.0.1:5500"];

const app = express();

// helmet
app.use(helmet());

// cors
app.use(cors({ origin: allowed_origins }));

app.use(express.json());

app.use("/api/products", product_routes);
app.use("/api/users", user_routes);
app.use("/api/orders", order_routes);
app.use("/api/auth", auth_routes);

//redis test
// app.get("/api/redis-test",async(req,res)=>{
//     await redis_client.setEx("test_message",10,"Hello from Redis");
//     const message=await redis_client.get("test_message");
//     res.json({success:true,messsage:message})
// })

//temp route to check ttl
// app.get("/api/redis-ttl-test",async (req, res) => {
//     const ttl = await redis_client.ttl("test_message");
//     res.json({success: true,ttl: ttl});
// });

app.get("/", (req, res) => {
    res.json({success: true,message: "E-com API is running"});
});

export default app;