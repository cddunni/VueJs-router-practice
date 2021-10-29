import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ContactUs from '../views/ContactUs.vue'


Vue.use(VueRouter)
Vue.use()

const routes = [
    {
        path:'/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name:'About',
        component: About
    },
    {
        path:'/ContactUs',
        name: 'ContactUs',
        component: ContactUs
    }
]

const router = new VueRouter({
    mode:'history',
    base: process.env.BASE_URL,
    routes
})

export default router