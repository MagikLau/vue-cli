import Vue from 'vue';
import Router from 'vue-router';
// import iView from 'iview';

Vue.use(Router);
// Vue.use(iView);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./views/Index.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('./views/Login.vue')
        },
    ]
});
