<template>
    <el-checkbox-group v-model="checkedList" @change="onChange" v-bind="$attrs" :min="min" :max="max">
        <template >
            <el-checkbox v-for="(item) in source" :key="item.value" :label="item.value" 
             :disabled="item.disabled || false">
                {{item.text}}
            </el-checkbox>
        </template>
    </el-checkbox-group>
</template>
<script>
export default {
    name:'y-checkbox',
    props:{
        checkedData:{
            type:[String,Array],
            default:'',
            require:true
        },
        source:{
            type: [Array],
            default:()=>[
                {
                    text:"选项1",
                    value:'1',
                },
            ],
            require:true
        },
        min:{
            type:[Number,String]
        },
        max:{
            type:[Number,String]
        },
    },
    model:{
        prop:'checkedData',
        event:'change'
    },
    data(){
        return {
            checkedList:[]
        }
    },
    mounted(){
        // 设置多选框是否选中
        let boo = typeof this.checkedData == 'string'? true:false
        console.log('this.checkedData',this.checkedData)
        if(boo){
            let data = this.checkedData.split('')
            data.forEach((item,index)=>{
                if(item == '1'){
                    this.checkedList.push(this.source[index].value)
                }
            })
        }
    },
    methods:{
        // 将选中的值传递给父组件
        onChange(val){
            let data = this.source.map((item)=>{
                return this.checkedList.some((checkedVal)=>{
                    return item.value == checkedVal
                })? "1" : "0"
            })
            console.log(data.join(''))
            this.$emit('change',data.join(''))
        }
    },
}
</script>
    
