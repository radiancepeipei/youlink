import Vue from "vue";
import VueRouter from "vue-router";
//import Home from "../views/Home.vue";
import ChatRoom from "../views/ChatRoom.vue";
Vue.use(VueRouter);



export default new VueRouter({
        mode: 'history',
        base: process.env.BASE_URL,
        routes: [{
                path: '/',
                name: 'home',
                component: ChatRoom
            },
            {
                path: '/about',
                name: 'about',
                component: () =>
                    import ( /* webpackChunkName: "about" */ "../views/About.vue")

            }
        ]

    })
    // const routes = [{
    //         path: "/",
    //         name: "home",
    //         component: ChatRoom
    //     },
    //     {
    //         path: "/about",
    //         name: "about",
    //         // route level code-splitting
    //         // this generates a separate chunk (about.[hash].js) for this route
    //         // which is lazy-loaded when the route is visited.
    //         component: () =>
    //             import ( /* webpackChunkName: "about" */ "../views/About.vue")
    //     }
    // ];

// const router = new VueRouter({
//     mode: "history",
//     base: process.env.BASE_URL,
//     routes
// });

// export default router;