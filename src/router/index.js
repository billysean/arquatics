import { createRouter, createWebHistory } from "vue-router";
import Home from '/src/pages/Home.vue'
import Collection from '/src/pages/collections.vue'


const routes = [
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/collection',
        name:'Collection',
        component: Collection
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router