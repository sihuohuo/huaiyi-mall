<template>
    <div v-bind="$attrs">
        
        
        <el-input v-if="multiple" v-popover:popover clearable @click.native="isDisabled=false"
            @clear="clear">
            <template slot="prefix">
                <el-tag 
                    v-for="(item,index) in multipleSelection"
                    :key="item[searchProps.key]"
                    size="medium" closable 
                    @close="handleClose(item,index)"
                    z-index="-1"
                    >
                    {{item[searchProps.text]}}
                </el-tag>
                
            </template>
            <template slot="suffix">
                <i v-show="showClose" class="el-icon-circle-close" @click="suffixCloseIcon"></i>
            </template>
        </el-input>
        <el-input v-else v-model="inputText" v-popover:popover clearable @click.native="isDisabled=false"
            @clear="clear" @keyup.native="radioKeyUp"
        >
        </el-input>
            <el-popover
            ref="popover"
            placement="bottom"
            width="300"
            trigger="click"
            :disabled="isDisabled"
            >
            <template>
                <el-row :gutter="20" 
                style="display:flex;justify-content:flex-start;flex-wrap: wrap;align-items:center;margin-bottom:5px"
                >
                    <el-col :span="12" v-for="item in searchCondition" :key="item.key" style="margin:2px 0px">
                        <el-input v-model="item.value" :placeholder="item.label || '请输入'" style="width:100%" clearable></el-input>
                    </el-col>
                    <el-col :span="12">
                        <el-button-group>
                            <el-button type="primary" @click="query" size="medium">查询</el-button>
                            <el-button @click="reset" size="medium">重置</el-button>
                        </el-button-group>
                    </el-col>
                    
                </el-row>
                
                <el-table
                    v-if="multiple"
                    ref="multipleTable"
                    :data="tableData"
                    highlight-current-row
                    @current-change="handleCurrentChange"
                    style="width: 100%"
                    height="200"
                    stripe
                    @selection-change="handleSelectionChange"
                >
                    <el-table-column type="selection" width="55" fixed="left"></el-table-column>
                    <el-table-column type="index" width="60" label="序号" fixed="left"></el-table-column>
                    <el-table-column v-for="{key,label,source} in searchColumn"  :key="key"
                     :prop="key" width="100" :label="label" sortable :formatter="getTableColumnSource" :column-key="source">
                        
                     </el-table-column >
                    
                </el-table>
                <el-table
                    v-else
                    ref="radioTable"
                    :data="tableData"
                    highlight-current-row
                    @current-change="handleCurrentChange"
                    style="width: 100%"
                    height="200"
                    stripe
                    @row-dblclick="rowDblClick"
                >
                    <el-table-column type="index" width="60" label="序号"></el-table-column>
                    <el-table-column v-for="{key,label,source} in searchColumn"  :key="key"
                     :prop="key" width="100" :label="label" sortable :formatter="getTableColumnSource" :column-key="source">
                        
                     </el-table-column >
                    
                </el-table>
                
                <!-- <component :is="multiple?'radioTable':'checkboxTable'"></component> -->
            </template>
        </el-popover>
        <!-- <el-button v-popover:popover>focus 激活</el-button> -->
        
    </div>
</template>
<script>
export default {
    name:'y-search',
    props:{
        searchText:{
            type:[String,Array],
            require:true
        },
        searchUrl:{
            type:String,
            default:'getTableDataData',
            require:true
        },
        multiple:{
            type:Boolean,
            default:false
        },
        searchColumn:{
            type:Array,
            default:()=>{return [
                {
                    key:'id',
                    label:'编号'
                },
                {
                    key:'name',
                    label:'姓名',
                },
                {
                    key:'sex',
                    label:'性别',
                    source:'sex'
                },
            ]},
            require:true
        },
        // 回显在文本框的数据
        searchProps:{
            type:Object,
            default:()=>{
                return {
                    key:'id',
                    text:'name'
                }
            }
            
        },
        searchCondition:{
            type:Array,
            default:()=>{return [
                {
                    key:'id',
                    value:'1',
                    label:'编号'
                },
                {
                    key:'name',
                    value:'2',
                    label:'姓名'
                },
                {
                    key:'sex',
                    value:'1',
                    label:'性别'
                },
            ]},
            require:true
        },
        extendCondition:{
            type:Object,
            default:()=>{return {}},
            require:false
        },
    },
    model:{
        prop:'searchText',
        event:'change'
    },
    // watch:{
    //     searchColumn:{
    //         handler(newVal){
    //             newVal.forEach((item)=>{
    //                 if(item.source){

    //                 }
    //             })
    //         },
    //         immediate:true,
    //         deep:true
    //     },
    // },
    data(){
        return{
            inputText:'',
            text:'',
            showClose:false,
            isDisabled: false, // 控制Popover是否关闭
            tableData:[], // 表格数据
            radiotSelectedRow:{}, // 单选选中行
            multipleSelection:[], // 多选时选中的数据 
        }
    },
    watch:{
        searchText:{
            handler(val){
                this.initMultipleSelection()
                if(val.length>0){
                    this.showClose = true
                }else{
                    this.showClose = false
                }
            },
            immediate:true,
            deep:true
        }
    },
    async mounted(){
        await this.getTableData()
        this.initMultipleSelection()
        //  if(this.multiple){
        //     this.multipleSelection = this.searchText
        //     this.tableData.forEach((tableItem)=>{
        //         let boo = this.searchText.some((item)=>{
        //             return item[this.searchProps.key] == tableItem[this.searchProps.key]
        //         })   
        //         if(boo){
        //             this.$refs.multipleTable.toggleRowSelection(tableItem,true)
        //         }else{
        //             this.$refs.multipleTable.toggleRowSelection(tableItem,false)
        //         }
        //     })
        // }else{
        //     this.tableData.some((item)=>{
        //         if(item[this.searchProps.key] == this.searchText){
        //             this.radiotSelectedRow = item
        //             return true
        //         }
        //     })
        // }
    },
    methods:{
        // 获取table表格数据
        async getTableData(){
            console.log('multipleSelection',this.multipleSelection)
            this.tableData = await new Promise( (resolve)=>{
                setTimeout(resolve(
                    [
                        { id: "01", name: "张三", sex: "01" },
                        { id: "02", name: "李四", sex: "01" },
                        { id: "03", name: "雪莉", sex: "02" },
                    ]
                ),1000 )
            })
        },
        rowDblClick(row){
            if(this.multiple){
                //多选时的处理
            }else{
                // 单选时的处理
                this.radiotSelectedRow = row
                this.inputText = row[this.searchProps.text]
                this.$emit('change',row[this.searchProps.key])
                // 关闭Poppver
                this.isDisabled = true
            }
        },
        getTableColumnSource(row, column, cellValue, index){
            
            // console.log('column',column.columnKey)
            if(column.columnKey){
                
                // console.log('columnKey',column.columnKey)
                // let p = new Promise((resolve)=>{
                //     setTimeout(resolve(
                //         [
                //             {key:'01',text:'男'},
                //             {key:'02',text:'女'}
                //         ]
                //     ),1000)
                // }).then((data)=>{
                //     let arr = data.filter((item)=>{
                //         return item.key == cellValue
                //     })   
                //     // console.log('arr[0].text',arr[0].text)
                //     // return arr[0].text
                //     // this.text = arr[0].text
                //     return arr[0].text
                // })
                // let fn1 = async()=>{
                //     return await p
                // }
                // return fn1()

                let data = [
                            {key:'01',text:'男'},
                            {key:'02',text:'女'}
                        ]
                let arr = data.filter((item)=>{
                    return item.key == cellValue
                }) 
                return arr[0].text
            }else{
                // console.log('cellValue',cellValue)
                return cellValue
            }
        },
        handleCurrentChange(val){
            this.radiotSelectedRow = val
        },
        //多选框

        handleSelectionChange(val){
           this.multipleSelection = val
           this.$emit('change',this.multipleSelection)
        }, 
        handleClose(tag,index){
            this.multipleSelection.splice(index,1)
        },
        // 初始化表格的选中状态
        initMultipleSelection(){
            // 初始化多选表格的选中状态
            if(this.multiple){
                this.multipleSelection = this.searchText
                this.tableData.forEach((tableItem)=>{
                    let boo = this.searchText.some((item)=>{
                        return item[this.searchProps.key] == tableItem[this.searchProps.key]
                    })   
                    if(boo){
                        this.$refs.multipleTable.toggleRowSelection(tableItem,true)
                    }else{
                        this.$refs.multipleTable.toggleRowSelection(tableItem,false)
                    }
                })
            }else{
                this.tableData.some((item)=>{
                    if(item[this.searchProps.key] == this.searchText){
                        this.radiotSelectedRow = item
                        return true
                    }
                })
            }
        },
        suffixCloseIcon(){
            this.$emit('change',[])   
        },


        query(){
            console.log('searchCondition',this.searchCondition)
        },
        reset(){

        },
        clear(){
            console.log("清空了数据")
            if(this.multiple){
                this.multipleSelection = []
                this.$emit('change',[])    
            }else{
                this.radiotSelectedRow = {}
                this.$emit('change','')
            }
            
        },
        radioKeyUp(){
            this.inputText = this.radiotSelectedRow[this.searchProps.text] || ''
        },
    },
    
}
</script>
<style lang="scss" scoped>
    /deep/ .el-input{
        width: 200px;
    }
    .input-tag{
        width: 200px;
        height: 40px;
        border: 1px solid blue;
    }
    /deep/ .el-input__prefix{
        align-items: center;
        display: flex;
    }
    /deep/ .el-input__suffix{
        margin-right:3px;
        align-items: center;
        display: flex;
        &:hover{
            color: red;
        }
    }
    .el-tag{
        margin: 2px;
    }
</style>