import Product from "@/views/product/index.vue"

const routes = [
    {
        path:'/product/:id',
        name:'product',
        component:Product
    },
]

export default routes;