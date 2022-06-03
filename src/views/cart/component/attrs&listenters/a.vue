<template>
    <div>
        <attrs-b :msg1="msg1" :msg2="msg2" @fn1="fn1" @fn2="fn2"></attrs-b>
    </div>
</template>
<script>
import attrsB from './b.vue'
export default {
    name:'attrsA',
    components:{
        attrsB,
    },
    data(){
        return{
            msg1:'张三',
            msg2:'李四',
        }
    },
    methods:{
        fn1(){
            console.log('父组件的fn1方法')
        },
        fn2(){
            console.log('父组件的fn2方法')
        }
    },

}
</script>