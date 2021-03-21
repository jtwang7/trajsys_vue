import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 应用页面
const MainRoute = () => import('@/views/Main')
// main-地图路由
const GaodeRoute = () => import('@/components/common/map/EchartsGaode');
const MapboxRoute = () => import('@/components/common/map/Mapbox');

// 登陆页面
const LoginRoute = () => import('@/components/common/login/Login');

const routes = [
  {
    path: '/',
    redirect: '/main/gaode/tourist',
  },
  {
    // 应用页面
    path: '/main',
    component: MainRoute,
    children: [
      {
        path: 'gaode/:id',
        component: GaodeRoute,
      },
      {
        path: 'mapbox',
        component: MapboxRoute,
      },
    ],
  },
  {
    // 登陆页面
    path: '/login',
    component: LoginRoute,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
