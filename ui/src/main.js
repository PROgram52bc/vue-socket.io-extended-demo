import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import VueSocketio from 'vue-socket.io-extended';
import io from 'socket.io-client';
Vue.use(VueSocketio, io('http://localhost:5000'));


Vue.config.productionTip = false

new Vue({
	render: h => h(App),
	router
}).$mount('#app')
