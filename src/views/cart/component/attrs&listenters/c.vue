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
        }
    },
    data(){
        return {

        }
    },
    created(){
        console.log('$attrs',this.$attrs)
        console.log('msg1',this.msg1)
        console.log('$listeners',this.$listeners)
        this.$emit('fn1')
    },
    methods:{

    }
}
</script>