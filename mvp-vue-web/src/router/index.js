import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import firebase from 'firebase'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [{
            path: '*', //default route
            redirect: '/login'
        },
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/sign-up',
            name: 'SignUp',
            component: SignUp
        }
    ]
})

router.beforeEach((to, from, next) => {
    //grab current user from firebase
    const currentUser = firebase.auth().currentUser
        //store the records that require authentication
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
        //if don't have current User(not login yet),stay in login page
    if (requiresAuth && !currentUser) next('/login')
    else if (!requiresAuth && currentUser) next('/home')
    else next()
})

export default router