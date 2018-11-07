import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import('@/views/Index.vue'),
            children: [
                {
                    path: '/',
                    name: 'content',
                    component: () => import('@/views/Content.vue')
                },
                {
                    path: '/login',
                    name: 'login',
                    component: () => import('@/views/Login.vue')
                },
            ]
        },

    ]
});
