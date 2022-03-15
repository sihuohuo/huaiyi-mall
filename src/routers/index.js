import Vue from "vue";
import Router from "vue-router";
import Home from '@/routers/home.js'
import Cart from '@/routers/cart.js'

Vue.use(Router);

const routes = [];

Reflect.apply([].push,routes,Home)
Reflect.apply([].push,routes,Cart)

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL, 
  routes
});
