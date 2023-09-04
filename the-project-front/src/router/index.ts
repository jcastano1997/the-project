import { createRouter, createWebHistory } from 'vue-router'
import BaseLayout from '../layouts/BaseLayout.vue'
import SignInView from '../views/account/SignInView.vue'
import SignUpView from '../views/account/SignInView.vue'
import RecoveryView from '../views/account/RecoveryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'signin',
      meta: {
        layout: BaseLayout,
      },
      component: SignInView
    },
    {
      path: '/',
      name: 'signup',
      component: SignUpView
    },
    {
      path: '/signin/recovery',
      name: 'recovery',
      component: RecoveryView
    }
  ]
})
export default router
