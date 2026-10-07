export function add_to_cart(cart, product) {
    const existing_product = cart.find(function (item) {
        return item.id === product.id;
    });

    if (existing_product) {
        existing_product.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    return cart;
}

export function remove_from_cart(cart, product_id) {
    return cart.filter(function (item) {
        return item.id !== product_id;
    });
}

export function calculate_total(cart) {
    return cart.reduce(function (total, item) {
        return total + item.price * item.quantity;
    }, 0);
}

export function get_cart_count(cart) {
    return cart.reduce(function (count, item) {
        return count + item.quantity;
    }, 0);
}