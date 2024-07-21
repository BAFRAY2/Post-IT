import { createRouter, createWebHistory } from 'vue-router'
import AllItem from '@/views/AllItem.vue'
import OneItem from '@/views/OneItem.vue'
import NotFound from '@/views/NotFound.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AllItem
    },
    /* {
      path: '/note',
      name: 'note',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: OneItem
      component:OneItem
    } */
    {
      path: '/note/:id',
      name: 'note',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: OneItem
      component:OneItem
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: OneItem
      component:NotFound
    }
  ]
})

export default router
