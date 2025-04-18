import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Test from '../views/Test.vue'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/', name: 'home', component: Home,
        },
        {
            path: '/home', name: 'home', component: Home,
        },
        {
            path: '/test', name: 'test', component: Test,
        },
        {
            //第二种写法
            path: '/test', name: 'test', component: () => import('../views/Test.vue'),
        },
    ],
})

export default router
