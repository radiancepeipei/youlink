import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import Home from '@/components/Home.vue'
import Profile from '@/components/User/Profile.vue'
import Signin from '@/components/User/Signin.vue'
import Signup from '@/components/User/Signup.vue'
Vue.use(VueRouter)
Vue.use(Vuelidate)
const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/profile', // URL
        name: 'Profile', // 組件名稱
        component: Profile // import後面的名詞
    },
    {
        path: '/signin',
        name: 'Signin',
        component: Signin
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    }
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router