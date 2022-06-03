<template>
    <div>
        <slot name="one" v-bind:data="msg"></slot>
        <!-- <el-button type="primary" size="small">
            返回
        </el-button> -->
    </div>
</template>
<script>
export default {
    name:'slotA',
    data(){
        return {
            msg:'阿斯顿'
        }
    },
    methods:{
        
    },
}
</script>
