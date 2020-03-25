// importing core vue files

import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "./views/Home";
import Product from "./views/Prod";

// import Category from "./views/Category";


Vue.use(VueRouter);

// 1. Define Routes
const myRoutes = [
    {
        path: "/",
        component: Home,
        name: 'home'
    },
    {
        path: "/prod",
        component: Product,
        name: "product"
    },
    // {
    //     path: "/Category",
    //     component: Category,
    //     name: "category"
    // },
   
];


// 2. Define a Router Instance
const router = new VueRouter({
    mode: "history",
     routes: myRoutes,
});


// 3. Register your default routes in your application
export default router;
