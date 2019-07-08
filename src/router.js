import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: { name: 'setcategories' }
      // name: 'home',
      // component: () => import(/* webpackChunkName: "home" */ './views/Home')
    },
    {
      path: '/setcategories',
      name: 'setcategories',
      component: () => import(/* webpackChunkName: "setcategories" */ './views/Setcategories')
    },
    {
      path: '/sets',
      name: 'sets',
      component: () => import(/* webpackChunkName: "sets" */ './views/Sets')
    },
    {
      path: '/partcategories',
      name: 'partcategories',
      component: () => import(/* webpackChunkName: "partcategories" */ './views/Partcategories')
    },
    {
      path: '/parts',
      name: 'parts',
      component: () => import(/* webpackChunkName: "parts" */ './views/Parts')
    }
  ]
})
