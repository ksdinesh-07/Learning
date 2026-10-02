import mongoose from "mongoose";

const product_schema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true,
            min: 1
        },
        stock: {
            type: Number,
            default: 0,
            min: 0
        },
        category: {
            type: String,
            required: true
        },
        status: {
            type: String,
            enum: ["active", "inactive"],
            default: "active"
        }
    },
    {
        timestamps: true
    }
);

export const product_model = mongoose.model("Product",product_schema);