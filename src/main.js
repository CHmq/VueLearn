import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import Antd from 'ant-design-vue'
import store from './store'
import toast from './components/common/toast'
import "ant-design-vue/dist/antd.css";

Vue.use(Antd);
Vue.config.productionTip = false;
Vue.use(toast)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
