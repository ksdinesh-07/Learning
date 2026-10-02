import mongoose from "mongoose";

const order_schema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        items: [
            {
                product_id: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Product",
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true,
                    min: 1
                },
                price_at_purchase: {
                    type: Number,
                    required: true,
                    min: 1
                }
            }
        ],

        total_amount: {
            type: Number,
            required: true,
            min: 1
        },
        status: {
            type: String,
            enum: [
                "pending",
                "confirmed",
                "shipped",
                "delivered",
                "cancelled"
            ],
            default: "pending"
        }
    },
    {
        timestamps: true
    }
);

export const order_model = mongoose.model("Order",order_schema);

