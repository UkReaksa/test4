import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { comment } from 'postcss'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/Nuvbar',
      name: 'Nuvbar',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Nuvbar.vue')
    },
    {
      path: '/HomeView',
      name: 'HomeView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HomeView.vue')
    },
    {

      path: '/Login',
      name: 'Login',
      component: () => import('../views/Login.vue')

    },
    {
      path: '/back',
      name: 'back',
      component: () => import('../views/HomeView.vue')

    },
    {
      path: '/Boxitem',
      name: 'Boxitem',
      component: () => import('../views/Boxitem.vue')

    },
    {
      path: '/Freeclass',
       name: 'Freeclass',
    component: () => import('../views/Freeclass.vue')
    }
    
  
  ]
})

export default router
