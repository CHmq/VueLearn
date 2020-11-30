import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/home'
import Cart from '../pages/cart'
import Category from '../pages/category'
import User from '../pages/user'
import Detail from '../pages/detail'


Vue.use(VueRouter)


const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home
    },    
    {
        path:'/cart',
        component:Cart
    },   
    {
        path:'/caregory',
        component:Category
    },   
    {
        path:'/user',
        component:User
    },   
    {
        path:'/detail/:iid',
        component:Detail
    },
];

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router