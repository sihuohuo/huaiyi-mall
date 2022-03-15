import Vue from "vue";
import App from "./App.vue";
import router from "./routers/index";
import store from "./store/index";
import global from './global/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // 样式需要单独引用
import "./registerServiceWorker";
Vue.use(ElementUI)
Vue.config.productionTip = false;
Vue.prototype.$global = global



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
