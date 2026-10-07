import {
    add_to_cart,
    remove_from_cart,
    calculate_total,
    get_cart_count
} from "../src/cart.js";

describe("Shopping Cart", function () {

    test("should add a product to cart", function () {
        const cart = [];

        add_to_cart(cart, {
            id: 1,
            name: "Laptop",
            price: 55000
        });

        expect(cart).toHaveLength(1);
        expect(cart[0].quantity).toBe(1);
    });

    test("should increase quantity for same product", function () {
        const cart = [];

        const product = {
            id: 1,
            name: "Laptop",
            price: 55000
        };

        add_to_cart(cart, product);
        add_to_cart(cart, product);

        expect(cart[0].quantity).toBe(2);
    });

    test("should remove a product", function () {
        const cart = [
            {
                id: 1,
                name: "Laptop",
                price: 55000,
                quantity: 1
            },
            {
                id: 2,
                name: "Mouse",
                price: 1200,
                quantity: 1
            }
        ];

        const result = remove_from_cart(cart, 1);

        expect(result).toHaveLength(1);
        expect(result[0].id).toBe(2);
    });

    test("should calculate total price", function () {
        const cart = [
            {
                id: 1,
                name: "Laptop",
                price: 55000,
                quantity: 1
            },
            {
                id: 2,
                name: "Mouse",
                price: 1200,
                quantity: 2
            }
        ];

        expect(calculate_total(cart)).toBe(57400);
    });

    test("should calculate total quantity", function () {
        const cart = [
            {
                id: 1,
                name: "Laptop",
                price: 55000,
                quantity: 1
            },
            {
                id: 2,
                name: "Mouse",
                price: 1200,
                quantity: 2
            }
        ];

        expect(get_cart_count(cart)).toBe(3);
    });

    test("should return zero for empty cart", function () {
        const cart = [];

        expect(calculate_total(cart)).toBe(0);
        expect(get_cart_count(cart)).toBe(0);
    });
});