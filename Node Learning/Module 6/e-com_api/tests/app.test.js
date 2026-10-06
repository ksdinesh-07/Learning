import request from "supertest";
import app from '../src/app.js';
import { connect_db } from "../src/config/database.js";
import "dotenv/config";
import mongoose from "mongoose";
import { user_model } from "../src/models/user_model.js";
import bcrypt from "bcrypt";

beforeAll(async()=>{
    await connect_db();
})

afterAll(async () => {
    await mongoose.connection.close();
});

//static test on app.js get method
test("GET / should return API running message",async ()=>{
    const response=await request(app).get("/");
    //assertion
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe("E-com API is running")
    
})

//test the login - condition is false
test("POST /api/auth/login should reject invalid credentials",async()=>{
    const response=await request(app).post("/api/auth/login").send({email:"1234@gamil.com",password:"wrongpassword"});
    expect(response.status).toBe(401);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe("Invalid email or password");
})

//test the login - condition is true
test("POST /api/auth/login should login with valid credentials", async () => {
    const response = await request(app).post("/api/auth/login").send({email: "arul_auth@example.com",password: "Arul@123"});
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.token).toBeDefined();
    expect(response.body.user).toBeDefined();
});

//test the delete  api
test("/DELETE /api/products/:id should reject request without token",async ()=>{
    const response=await request(app).delete("/api/products/123");
    expect(response.status).toBe(401);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe("Authorization header missing")
})

//test role basesd access
test("DELETE /api/products/:id should reject customer access",async()=>{
    const login_response=await request(app).post("/api/auth/login").send({email:"test.com",password:"test12345"});
    const token=login_response.body.token;
    const response=await request(app).delete("/api/products/123").set("Authorization",`Bearer ${token}`);
    expect(response.status).toBe(403);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe("Admin access required")
})

//test with the admin login for delete
test("DELETE /api/products/:id should allow the admin access",async()=>{
    const product_response=await request(app).post("/api/products").send({name:"Test Product",description:"Test product for admin delete integration test",price:500,category:"Test"});
    // console.log(product_response.body)
    const product_id =product_response.body.product._id;
    const login_response=await request(app).post("/api/auth/login").send({email:"admin@test.com",password:"admin12345"});
    const token=login_response.body.token;
    const response=await request(app).delete(`/api/products/${product_id}`).set("Authorization", `Bearer ${token}`);
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe("Product deleted successfully");
})

//regestration test
test("POST /api/auth/register should store user in MongoDB", async () => {
    const test_email = `test_${Date.now()}@example.com`;
    const response = await request(app).post("/api/auth/register").send({name: "Integration Test User",email: test_email,password: "Test@12345",phone: "9876543210"});
    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    const stored_user = await user_model.findOne({email: test_email}).select("+password");
    expect(stored_user).not.toBeNull();
    expect(stored_user.name).toBe("Integration Test User");
    expect(stored_user.email).toBe(test_email);
    //check the hasing is working
    expect(stored_user.password).not.toBe("Test@12345");
    const password_match=await bcrypt.compare("Test@12345",stored_user.password);
    expect(password_match).toBe(true);
});

