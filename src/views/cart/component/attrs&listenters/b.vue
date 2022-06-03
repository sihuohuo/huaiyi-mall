<template>
    <div>
        <attrs-c v-bind="$attrs" v-on="$listeners"></attrs-c>
    </div>
</template>
<script>
import attrsC from './c.vue'
export default {
    name:'attrsB',
    inheritAttrs:false,
    components:{
        attrsC,
    },
    props:['msg2'],
    data(){
        return {
            aaa:''
        }
    },
    created(){
        console.log('msg2',this.msg2)
        this.$emit('fn2')
    },
    mounted(){
        // this.aaa = this.$attrs.msg2
        // console.log('aaa',this.aaa)
    }
}
</script>