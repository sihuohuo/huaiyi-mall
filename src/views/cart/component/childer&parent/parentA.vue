<template>
    <div>
        <childer-b v-bind.sync="obj" @changeName="changeName"></childer-b>
    </div>
</template>
<script>
import childerB from './childerB.vue'
export default {
    name:'parentA',
    components:{
        childerB,
    },
    data(){
        return{
            name:'父组件A的name值',
            obj:{
                name:"张三",
                age:10,
            }
        }
    },
    methods:{
        changeName(){
            this.obj.name = "李四"
        }
    }
}
</script>