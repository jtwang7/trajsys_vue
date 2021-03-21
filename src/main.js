import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';



Vue.use(ViewUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


// // 全局加载login登录组件的css样式(局部加载方案暂时未找到)
// import '@/assets/login/iconfont.css'
// import Login from '@/components/common/login/Login'

// // DOM根节点挂载组件(和app同级)
// // 步骤：index.html内创建容器(id='login')；通过Vue.extend()将.vue组件生成为构造对象；实例化对象并挂载到容器节点
// // Vue.extend() / $mount() 参考官方文档
// const LoginDom = Vue.extend(Login);
// new LoginDom().$mount('#login');