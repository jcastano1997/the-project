import { createRouter, createWebHistory } from 'vue-router'
import BaseLayout from '../layouts/BaseLayout.vue'
import HomeView from '../views/HomeView.vue'
import SignInView from '../views/account/SignInView.vue'
import SignUpView from '../views/account/SignUpView.vue'
import RecoveryPasswordView from '../views/account/RecoveryPasswordView.vue'
import PostView from '../views/blog/PostView.vue'
import { HOME_PATH, SIGNIN_PATH, SIGNUP_PATH, RECOVERY_PASSWORD_PATH, BLOG_PATH } from './constants'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: HOME_PATH,
      name: 'home',
      meta: {
        layout: BaseLayout,
      },
      component: HomeView
    },
    {
      path: SIGNIN_PATH,
      name: 'signin',
      meta: {
        layout: BaseLayout,
      },
      component: SignInView
    },
    {
      path: SIGNUP_PATH,
      name: 'signup',
      meta: {
        layout: BaseLayout,
      },
      component: SignUpView
    },
    {
      path: RECOVERY_PASSWORD_PATH,
      name: 'recovery',
      meta: {
        layout: BaseLayout,
      },
      component: RecoveryPasswordView
    },
    {
      path: BLOG_PATH,
      name: 'blog',
      meta: {
        layout: BaseLayout,
      },
      component: PostView
    }
  ]
})
export default router
