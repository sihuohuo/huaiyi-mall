<template>
    <div>cart
        <el-button type="primary" size="small" @click="back">back</el-button>
    </div>
</template>

<script>
export default {
    name:'Cart',
    data(){
        return{

        }
    },
    mounted(){
        let arr = 1>0 && [1,2,3]
        console.log('arr',arr)
    },
    methods:{
        back(){
            this.$router.back()
        }
    }
}
</script>