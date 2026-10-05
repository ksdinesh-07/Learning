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

product_schema.index({category:1});
//1 for ascending order
//2 for descending order

export const product_model = mongoose.model("Product",product_schema);