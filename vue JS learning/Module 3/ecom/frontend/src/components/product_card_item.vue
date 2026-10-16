<template>

    <div class="card">

        <!-- named-slot name appears at the top-right of the card -->
        <div class="badge-area">
            <slot name="badge" >

                <!-- fallback shows only if the parent provides no badge -->
                <span v-if="product.discount" class="discount-badge" >
                    {{ product.discount }}% off
                </span>

            </slot>
        </div>

        <img :src="product.image_url" :alt="product.product_name" />

        <h3>{{ product.product_name }}</h3>

        <p class="category">{{ product.category }}</p>

        <!-- scoped slot for the price -> the child passes the raw price up  -->
        <p class="price">
            <slot name="price" :price="product.price" :discount="product.discount">
                <!-- fallback: default price display -->
                ₹{{ product.price }}
            </slot>
        <span v-if="product.discount" class="discount">
            {{ product.discount }}% off
        </span>
        </p>

        <p class="rating">⭐ {{ product.rating }}</p>
        <p class="desc">{{ product.description }}</p>

        <!-- default slot for the actio button area -->
         <div class="actions">
            <slot name="actions">
                <!-- fallback default -> add to cart button -->
                 <button class="add-btn" @click="handle_add_click">Add to Cart</button>
            </slot>
         </div>

    </div>

</template>


<script setup>

    const props = defineProps({
    product: {
        type: Object,
        required: true,
    },
    })

    const emit = defineEmits(["add-to-cart"])

    function handle_add_click() {
    emit("add-to-cart", props.product.id)
    }

</script>


<style scoped>

    .card {
    position: relative;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 12px;
    background: #fff;
    display: flex;
    flex-direction: column;
    gap: 6px;
    }

    .badge-area {
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 2;
    }

    .discount-badge {
    background: #d33;
    color: #fff;
    font-size: 11px;
    padding: 3px 8px;
    border-radius: 12px;
    font-weight: bold;
    }

    .card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 6px;
    }

    h3 { margin: 0; font-size: 16px; }
    .category { text-transform: uppercase; font-size: 11px; color: #888; margin: 0; }
    .price { font-weight: bold; margin: 0; }
    .discount { color: #d33; font-size: 12px; margin-left: 6px; }
    .rating { font-size: 13px; color: #555; margin: 0; }
    .desc { font-size: 12px; color: #666; margin: 0; }

    .actions {
    margin-top: auto;
    }

    .add-btn {
    width: 100%;
    padding: 8px 12px;
    background: #42b883;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    }

    .add-btn:hover { background: #369870; }

</style>