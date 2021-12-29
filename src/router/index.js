import { createRouter, createWebHistory } from "vue-router";
import Home from '/src/pages/Home.vue'
import Collections from '/src/pages/collections.vue'


const routes = [
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/collections',
        name:'Collections',
        component: Collections
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router