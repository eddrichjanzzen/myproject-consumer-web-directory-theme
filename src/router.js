import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./views/SignUp.vue'),
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: () => import('./views/Confirm.vue'),
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('./views/Products.vue'),
    },
    {
      path: '/products/:product_id',
      name: 'product_detail',
      component: () => import('./components/products/ProductDetail.vue'),
      props: true,

    },
    {
      path: '/booking',
      name: 'booking',
      component: () => import('./views/Booking.vue'),
      children: [
        {
          path: 'step1',
          name: 'step1',
          component: () => import('./components/booking/Step1.vue'),
        },
        {
          path: 'step2',
          name: 'step2',
          component: () => import('./components/booking/Step2.vue'),
        },
        {
          path: 'payment',
          name: 'payment',
          component: () => import('./components/booking/Step3.vue'),
        },
        {
          path: 'confirmed',
          name: 'confirmed',
          component: () => import('./components/booking/Step4.vue'),
        },
      ],
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('./views/User.vue'),
      children: [
        {
          path: 'step0',
          name: 'user-step0',
          component: () => import('./components/user_info/Step0.vue'),
        },
        {
          path: 'step1',
          name: 'user-step1',
          component: () => import('./components/user_info/Step1.vue'),
        },
        {
          path: 'step2',
          name: 'user-step2',
          component: () => import('./components/user_info/Step2.vue'),
        },
        {
          path: 'step3',
          name: 'user-step3',
          component: () => import('./components/user_info/Step3.vue'),
        },
        {
          path: 'step4',
          name: 'user-step4',
          component: () => import('./components/user_info/Step4.vue'),
        },
        {
          path: 'step5',
          name: 'user-step5',
          component: () => import('./components/user_info/Step5.vue'),
        },
      ],
    },
  ],
});
