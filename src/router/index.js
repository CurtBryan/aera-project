import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from "../components/home-page.vue"

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        }
    ]
})