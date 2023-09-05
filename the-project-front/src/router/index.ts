import { createRouter, createWebHistory } from 'vue-router'
import BaseLayout from '../layouts/BaseLayout.vue'
import SignInView from '../views/account/SignInView.vue'
import SignUpView from '../views/account/SignUpView.vue'
import RecoveryPasswordView from '../views/account/RecoveryPasswordView.vue'

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
      path: '/signup',
      name: 'signup',
      meta: {
        layout: BaseLayout,
      },
      component: SignUpView
    },
    {
      path: '/signin/recovery',
      name: 'recovery',
      meta: {
        layout: BaseLayout,
      },
      component: RecoveryPasswordView
    }
  ]
})
export default router
