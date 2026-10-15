import { createRouter,createWebHistory } from "vue-router";
import home_view from "../views/home_view.vue";


const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            name:'home',
            component:home_view
        }
    ]
})

export default router