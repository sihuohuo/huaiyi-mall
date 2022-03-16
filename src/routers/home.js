import Home from "@/views/Home.vue";
import Product from '@/routers/product.js'
import Index from '@/views/index.vue'

const children = []
const index = [
    {
        path:"/",
        name:'index',
        component:Index
    }
]
Reflect.apply([].push,children,Product)
Reflect.apply([].push,children,index)
const routes = [
    {
        path:"/",
        name: "home",
        component: Home,
        children
    },
]
  export default routes;