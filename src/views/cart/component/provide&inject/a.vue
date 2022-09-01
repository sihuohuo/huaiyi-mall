<template>
    <div>
        <pro-b></pro-b>
    </div>
</template>
<script>
import proB from './b.vue'
export default {
    name:'proA',// 父组件a
    components:{proB},
    // provide:{
    //     foo:'父组件a传递的值'
    // },
    provide() {
        return {
            foo: this.obj
        }
    },
    data(){
        return {
            obj: {
                a:"张三"
            }
        }
    },
    methods:{

    }
}
</script>