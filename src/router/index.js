import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/page/home-page/HomePage'
import Class from '@/components/page/class-page/Class'
import ShoppingCart from '@/components/page/shopping-cart/ShoppingCart'
import PersonalPage from '@/components/page/personal-page/PersonalPage'
import PersonalData from '@/components/page/personal-page/PersonalData'
import Changge from '@/components/page/personal-page/Changge'



Vue.use(Router)

export default new Router({
    mode:'history',
    routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/class',
      name: 'Class',
      component: Class
    },
    {
      path: '/shopping',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/personal',
      name: 'PersonalPage',
      component: PersonalPage
    },
    {
      path: '/personaldata',
      name: 'PersonalData',
      component: PersonalData
    },
    {
      path: '/changge',
      name: 'Changge',
      component: Changge
    },
  ],
  linkActiveClass: 'active'
})
