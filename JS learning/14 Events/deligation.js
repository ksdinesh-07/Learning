const delegation_product_list=document.getElementById("delegation_product_list");

delegation_product_list.addEventListener("click", (event) => {
    if (event.target.classList.contains("delegation_buy_button"))
        {
        console.log("Buy Button clicked");
        // Find the product
        const delegation_product =event.target.closest(".delegation_product");

        // Get product ID
        const delegation_product_id =delegation_product.dataset.product_id;

        // Get product name
        const delegation_product_name =delegation_product.querySelector("h3").textContent;
        console.log("Product ID:",delegation_product_id);
        console.log("Product Name:",delegation_product_name);

    }

});