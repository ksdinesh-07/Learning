import { createRouter, createWebHistory } from "vue-router"
import { use_auth_store } from "@/stores/auth.js"

// Eager (small, always needed)
import home_view from "@/views/home_view.vue"

// Lazy (loaded only when visited)
const product_detail_view = () => import("@/views/product_detail_view.vue")
const cart_view = () => import("@/views/cart_view.vue")
const login_view = () => import("@/views/login_view.vue")
const checkout_view = () => import("@/views/checkout_view.vue")
const not_found_view = () => import("@/views/not_found_view.vue")

const routes = [
  {
    path: "/",
    name: "home",
    component: home_view,
  },
  {
    path: "/product/:id",
    name: "product-detail",
    component: product_detail_view,
    props: true,
  },
  {
    path: "/cart",
    name: "cart",
    component: cart_view,
  },
  {
    path: "/login",
    name: "login",
    component: login_view,
    meta: { guest_only: true },
  },
  {
    path: "/checkout",
    name: "checkout",
    component: checkout_view,
    meta: { requires_auth: true },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: not_found_view,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, saved_position) {
    if (saved_position) return saved_position
    return { top: 0 }
  },
})

// GLOBAL GUARD
router.beforeEach((to, from) => {
  const auth = use_auth_store()

  // 1. Protected route + not logged in → redirect to login
  if (to.meta.requires_auth && !auth.is_logged_in) {
    return {
      name: "login",
      query: { redirect: to.fullPath },
    }
  }

  // 2. Guest-only route + logged in → redirect home
  if (to.meta.guest_only && auth.is_logged_in) {
    return { name: "home" }
  }

  // 3. Otherwise allow
  return true
})

export default router