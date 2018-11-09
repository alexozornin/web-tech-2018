import Vue from 'vue'
import Router from 'vue-router'
import Admin from '@/components/Admin'
import Home from '@/components/Home'
import Lab1 from '@/components/Lab1'
import Lab2 from '@/components/Lab2'
import Page from '@/components/Page'
import Profile from '@/components/Profile'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/lab1',
      name: 'Lab1',
      component: Lab1
    },
    {
      path: '/lab2',
      name: 'Lab2',
      component: Lab2
    },
    {
      path: '/page',
      name: 'Page',
      component: Page
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
  ]
})
