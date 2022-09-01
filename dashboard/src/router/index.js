import DashboardMain from '@/components/Accueil/DashboardMain.vue';
import ClientsPage from '@/components/Clients/ClientsPage.vue';
import Orders from '@/components/Commandes/Orders.vue';
import Messagerie from '@/components/Message/Messagerie.vue';
import Stats from '@/components/stat/Stats.vue';
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
        },
        {
            path: '/clients',
            component: ClientsPage,
            name: 'clients.index'
        },
        {
            path: '/stats',
            component: Stats,
            name: 'stats.index'
        },
        {
            path: '/messagerie',
            component: Messagerie,
            name: 'messagerie.index'
        }
    ]
})

export default router;