import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Lab1 from '@/components/Lab1'
import Lab2 from '@/components/Lab2'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
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
    }
  ]
})
