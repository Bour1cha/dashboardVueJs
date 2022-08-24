import DashboardMain from '@/components/Accueil/DashboardMain.vue';
import Orders from '@/components/Commandes/Orders.vue';
import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: DashboardMain,

        },
        {
            path: '/orders',
            component: Orders,
            name: 'orders.index'
        }
    ]
})

export default router;