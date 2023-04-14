import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

export default createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/info',
			name: 'info',
			component: () => import('@/views/Info.vue')
		},
		{
			path: '/impressum',
			name: 'impressum',
			component: () => import('@/views/Impressum.vue')
		}
	]
});
