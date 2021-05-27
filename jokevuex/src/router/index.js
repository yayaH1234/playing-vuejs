import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from '../components/Homepage.vue'
import Ourjokes from "../components/Ourjokes"
import IndependentTest from "../components/IndependentTest";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Homepage
  },
  {
    path: '/Ourjokes',
    name: 'Ourjokes',
    component: Ourjokes
  },
  {
  path: '/test',
    name: 'IndependentTest',
    component: IndependentTest
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
