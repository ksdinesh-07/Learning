import {createRouter,createWebHistory } from 'vue-router'
import dashboard_list from '../views/dashboard_list.vue'
import orders_view from '../views/orders_view.vue'

const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            redirect:'/dashboards'
        },
        {
            path:'/dashboards',
            name:'Dashboards',
            component:dashboard_list
        },
        {
            path:'/order',
            name:'Orders',
            component:orders_view
        }
    ]
})

export default router