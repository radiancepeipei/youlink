import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

// Required for side-effects
require('firebase/firestore')

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
        apiKey: 'AIzaSyD4FRyWOxywD7NoZP6INqAkAxyS1eoGpc8',
        authDomain: 'mvp-web-youlink.firebaseapp.com',
        databaseURL: 'https://mvp-web-youlink.firebaseio.com',
        projectId: 'mvp-web-youlink',
        storageBucket: 'mvp-web-youlink.appspot.com',
        messagingSenderId: '321860454252',
        appId: '1:321860454252:web:bb517c1387d82e00bfd549',
        measurementId: 'G-QQ05WV13V8'
    }
    // Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore()

window.db = db

//disable deprecated features
db.settings({

    timestampsInSnapshots: true
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')