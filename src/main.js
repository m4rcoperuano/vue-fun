import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'

/**
 * Views
 */

import App from './App.vue'
import Home from './views/Home'
import PopAnimation from './views/PopAnimation'


Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueRouter);

const routes = [
    { path: '/', component: Home },
    { path: '/popanim', component: PopAnimation }
];

const router = new VueRouter({ routes });


new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
