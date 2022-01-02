import { createRouter,createWebHistory } from 'vue-router'
import Home from '../views/home_view'
import storage from '../helpers/storage.js'




const routes = [
    {
        path : "/",
        name : "Home",
        component : Home,

    },
    {
        path : "/profile/:creator",
        name : "Profile",
        component : () => import(`@/views/profile.vue`),
        children : [
            {
                path : "",
                name : "Myarticles",
                component : () => import(`@/views/my_articles.vue`)
            },
            {
                path : "favourited",
                name : "FavouritedArticles",
                component : () => import(`@/views/favourited_articles.vue`)
            }
        ]
    },
    {
        path : "/article/:id",
        name : "Article",
        component : () => import(`@/views/article.vue`)
    },
    {
        path : "/signin",
        name : "Signin",
        component : () => import(`@/views/sign_in.vue`),
        // beforeEnter:(to,from,next) =>{
        //     if(test){
        //         next()
        //     }else{
        //         next({name:"Signup"})
        //     }
        // }
    },
    {
        path : "/signup",
        name : "Signup",
        component : () => import(`@/views/sign_up.vue`),
        beforeEnter:(to,from,next) =>{
            if(storage.isAuthenticated()){
                next({name:"Dashboard"});
            }else{
                next()
            }
        }
    },
    {
        path : "/verification",
        name : "Verification",
        component : () => import(`@/views/verification.vue`)
    },
    {
        path : "/dashboard",
        name : "Dashboard",
        component : () =>import(`@/views/dashboard.vue`),
        beforeEnter:(to,from,next) =>{
            if(storage.isAuthenticated()){
                next()
            }else{
                next({name:"Signup"})
            }
        }
    },
    {
        path : "/settings",
        name : "Settings",
        component : () =>import(`@/views/settings`),
         beforeEnter:(to,from,next) =>{
            if(storage.isAuthenticated()){
                next()
            }else{
                next({name:"Signin"})
            }
        }
    },
    {
        path : "/publish",
        name : "Create post",
        component : () => import(`@/views/create_article.vue`)
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router