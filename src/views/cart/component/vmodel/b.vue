<template>
    <div>
       {{msg}}
       <el-checkbox-group v-model="checkedList" @change="onChange">
           <template >
               <el-checkbox v-for="item in checkList" :key="item.value"
                 :label="item.value"
                
                >{{item.text}}</el-checkbox>
           </template>
       </el-checkbox-group>
    </div>
</template>
<script>
export default {
    name:'modelB',
    props:{
        msg:{
            type: String
        }
    },
    model:{
        prop:'msg',
        event:'change'
    },
    data(){
        return{
            checkList:[
                {text:'zhangsan',value:'0'},
                {text:'lisi',value:'1'},
                {text:'wangwu',value:'2'},
                {text:'zhaoliu',value:'3'},
            ],
            checkedList:[],
        }
        
    },
    methods:{
        onChange(val){
            console.log(this.checkedList)
        }
    },
}
</script>