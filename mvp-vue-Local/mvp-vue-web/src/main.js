import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false
let app = '' //initialize app

// Your web app's Firebase configuration
const firebaseConfig = {
        apiKey: 'AIzaSyCYHGcRPI0l8ZAt8rp-WIfNq6nZCs3Ef8c',
        authDomain: 'mvp-vue-web.firebaseapp.com',
        databaseURL: 'https://mvp-vue-web.firebaseio.com',
        projectId: 'mvp-vue-web',
        storageBucket: 'mvp-vue-web.appspot.com',
        messagingSenderId: '753210791220',
        appId: '1:753210791220:web:423cd64438fe4e5f6c0161',
        measurementId: 'G-BSG09880N3'
    }
    // Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        //initialize view instance after firebase already
        app = new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app')
    }
})