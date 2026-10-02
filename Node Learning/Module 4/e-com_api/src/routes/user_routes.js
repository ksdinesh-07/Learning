import express from "express";
import { user_model } from "../models/user_model.js";

const router = express.Router();
router.post("/", async (req, res) => {
    try {
        const user = await user_model.create(req.body);
        res.status(201).json({
            success: true,
            message: "User created successfully",
            user
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message
        });
    }
});

export default router;