<template>
    <div>
        <p>{{name}}</p>
        <el-button type="danger" @click="changeProp">change</el-button>
    </div>
</template>
<script>
export default {
    name:'childerB',
    props:{
        name:{
            type:String,
            default:()=>{
                return '子组件默认的name值'
            }
        },
        age:{
            type:Number,
            default:0
        },
        obj:{
            type:Object,
            default:()=>{
                return {}
            }
        }
    },
    data(){
        return{
        }
    },
    created(){

    },
    methods:{
        changeProp(){
            // this.$emit('changeName')
            this.$emit('update:name','子组件改变了name值')
        }
    }
}
</script>