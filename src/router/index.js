import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/login',
    name: 'Login',
    component:  () => import('../views/login')
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/',
    name: 'main-view',
    component: () => import('../views/main-view'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/home'),
        meta: { title: '首页' }
      },
      {
        path: 'up-down-layout',
        name: 'up-down-layout',
        component: () => import('../views/up-down-layout'),
        meta: { title: '上下布局' }
      },
      {
        path: 'left-right-layout',
        name: 'left-right-layout',
        component: () => import('../views/left-right-layout'),
        meta: { title: '左右布局' }
      },
      {
        path: 'center-layout',
        name: 'center-layout',
        component: () => import('../views/center-layout'),
        meta: { title: '居中布局' }
      },
      {
        path: 'left-upanddown-layout',
        name: 'left-upanddown-layout',
        component: () => import('../views/left-upanddown-layout'),
        meta: { title: '左上下布局' }
      },
      {
        path: 'up-leftandright-layout',
        name: 'up-leftandright-layout',
        component: () => import('../views/up-leftandright-layout'),
        meta: { title: '上左右布局' }
      },
      {
        path: 'card-layout',
        name: 'card-layout',
        component: () => import('../views/card-layout'),
        meta: { title: '卡片布局' }
      },
      {
        path: 'left-card-layout',
        name: 'left-card-layout',
        component: () => import('../views/left-card-layout'),
        meta: { title: '左上卡片布局' }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
