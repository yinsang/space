import App from './app'
import Vue from 'vue'
import router from "./router"
// import VueRouter from 'vue-router'
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');