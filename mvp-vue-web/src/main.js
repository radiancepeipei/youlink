// 程式路口檔案(初始化vue instance，並import需要的外掛及公共元件)
import Vue from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import * as firebase from 'firebase'
import router from './router'
import store from './store'

import Vuelidate from 'vuelidate'
Vue.config.productionTip = false
Vue.config.devtools = false
Vue.config.debug = false
Vue.use(Vuelidate)
new Vue({
    router, // root router
    store,
    vuetify,
    render: h => h(App),
    created() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCYHGcRPI0l8ZAt8rp-WIfNq6nZCs3Ef8c',
            authDomain: 'mvp-vue-web.firebaseapp.com',
            databaseURL: 'https://mvp-vue-web.firebaseio.com',
            projectId: 'mvp-vue-web',
            storageBucket: 'mvp-vue-web.appspot.com'
        })
    }
}).$mount('#app')