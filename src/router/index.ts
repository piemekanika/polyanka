import Home from '../pages/Home.vue';
import Shop from '../pages/Shop.vue';
import About from '../pages/About.vue';
import Profile from '../pages/Profile.vue';
import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/shop',
        component: Shop,
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/about',
        component: About,
    },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
