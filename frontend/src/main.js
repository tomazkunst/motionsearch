import { createApp } from 'vue'
import { createWebHistory , createRouter } from "vue-router";
import Home from './views/Home.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import ResetPassword from './views/ResetPassword.vue'
import MotionView from './views/MotionView.vue'
import MotionSuggest from './views/MotionSuggest.vue'

import App from './App.vue'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/reset',
      name: 'ResetPassword',
      component: ResetPassword
    },
    {
      path: '/motion',
      name: 'MotionView',
      component: MotionView
    },
    {
      path: '/motionSuggest',
      name: 'MotionSuggest',
      component: MotionSuggest
    }
  ];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')

