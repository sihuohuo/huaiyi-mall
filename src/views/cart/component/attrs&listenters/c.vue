<template>
    <div>

    </div>
</template>
<script>
export default {
    name:'attrsC',
    inheritAttrs:false,
    props:{
        "msg1":{
            type:String,
            default:'msg1默认值'
        },
        "msg2": {
            type: String,
            default: 'msg2默认值'
        },
    },
    data(){
        return {

        }
    },
    created(){
        console.log('$attrs',this.$attrs)
        console.log('msg1', this.msg1)
        // 拿不到父组件传递过来的msg2的值，因为在上级组件中，声明了prop，获取了msg2
        console.log('msg2', this.msg2)
        console.log('$listeners',this.$listeners)
        this.$emit('fn1')
    },
    methods:{

    }
}
</script>