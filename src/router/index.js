/**
 * $ npm install vue-router --save
 */
import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/Home.vue';  // asumiendo que hicimos este componente
import Login from '../components/Login.vue';
import Restoran from '../components/Restoran.vue';
import Categoria from '../components/Categoria.vue';
import PagNoEncontrada from '../components/PagNoEncontrada.vue';
import About from '../components/About.vue';
import Reviews from '../components/Reviews.vue';
import Images from '../components/Images.vue';

Vue.use(VueRouter);    // instalamos explícitamente el router

export default new VueRouter({
    routes: [
        {
            path: '/', 
            name: 'Inicio',
            component: Home
        },
        {
            path: '/login', 
            name: 'Login',
            component: Login
        },
        {
            path: '/:restoran', 
            name: 'Restoran',
            component: Restoran,
            props: true,
            children: [
                {
                    path: '',
                    component: About
                },
                {
                    path: 'reviews',
                    component: Reviews
                },
                {
                    path: 'images',
                    component: Images
                }
            ]
        },
        {
            path: '/category/:categoria', 
            name: 'Categoria',
            component: Categoria
        },
        {
            path: '*', 
            component: PagNoEncontrada
        }
    ]
})
