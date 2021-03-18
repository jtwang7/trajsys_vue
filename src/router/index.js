import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const GaodeRoute = () => import('@/components/common/map/EchartsGaode');
const MapboxRoute = () => import('@/components/common/map/Mapbox');

const routes = [
  {
    path: '/',
    redirect: '/gaode',
  },
  {
    path: '/gaode',
    component: GaodeRoute,
  },
  {
    path: '/mapbox',
    component: MapboxRoute,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
