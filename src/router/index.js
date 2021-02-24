import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Inscription from '../components/Inscription.vue'
import Connexion from '../components/Connexion.vue'
import SignLog from '../views/SignLog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/signup',
    name: 'Inscription',
    component: Inscription
  },
  {
    path: '/login',
    name: 'Connexion',
    component: Connexion
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'SignLog',
    component: SignLog
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
