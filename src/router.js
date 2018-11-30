import VueRouter from 'vue-router';
import Vue from 'vue';


import AppPosts from './components/AppPosts.vue';





Vue.use(VueRouter);


const routes = [
    { path: '/', redirect: '/posts' },
    { path: '/posts', component: AppPosts },
];

export const router = new VueRouter({
    mode: 'history',
    routes
});
