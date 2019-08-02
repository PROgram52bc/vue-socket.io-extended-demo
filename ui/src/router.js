import VueRouter from 'vue-router'
export default new VueRouter({
	mode: 'history',
	routes: [
		{
			name: 'home',
			path: '/home',
			component: () => import('./components/HelloWorld.vue'),
		},
		{
			name: 'gettime',
			path: '/gettime',
			component: () => import('./components/GetTime.vue'),
		},
	]
})
