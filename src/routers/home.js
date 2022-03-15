import Home from "@/views/Home.vue";
import Product from '@/routers/product.js'

const children = []
Reflect.apply([].push,children,Product)
const routes = [
    {
        path:"/",
        name: "home",
        component: Home,
        children
    },
]
  export default routes;