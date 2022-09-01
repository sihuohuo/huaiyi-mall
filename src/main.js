import Vue from "vue";
import App from "./App.vue";
import router from "./routers/index";
import store from "./store/index";
import  global from './global/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // 样式需要单独引用
import VueLazyload from 'vue-lazyload'
import "./registerServiceWorker";
Vue.use(ElementUI)
Vue.use(VueLazyload,{
  error:"../public/img/icons/error.png",
  loading:"../public/img/icons/loading.gif"
})
Vue.config.productionTip = false;
Vue.prototype.$global = global;
// Vue.config.errorHandler = function (err, vm, info) {
//   // console.log("------",err)
//   // console.log(vm)
//   // console.log(info)
// }

// 注册全局组件
let req = require.context('@/components/global',true,/\.vue$/)
req.keys().forEach((path)=>{
  const content = req(path).default || req(path)
  console.log('content', content.name)
  Vue.component(content.name,content)
  
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
