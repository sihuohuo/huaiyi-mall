<template>
    <div>
        <el-input
            placeholder="请输入关键字"
            v-model="filterText"
        ></el-input>
        <el-tree
            ref="tree"
            show-checkbox
            :data="treeData"
            :props="defaultProps"
            default-expand-all
            node-key="id"
            highlight-current
            :default-checked-keys="checkedKeys"
            :filter-node-method="filterNode"
            >
        </el-tree>
        <el-button type="primary" @click="getChecked">获取选中结点数据</el-button>
    </div>
</template>
<script>
    export default {
        name:'y-tree',
        data() {
            return {
                filterText:'',
                defaultProps: {
                    label: 'name',
                    children: 'children',
                    isLeaf: 'isLeaf'
                },
                treeData: [
                    {
                        id: '01',
                        name: '张氏',
                        isLeaf:'0',
                        children: [
                            {
                                id: '0101',
                                name: '张三',
                                isLeaf: '0',
                                children: [
                                    {
                                        id: '010101',
                                        name: '张一三',
                                        isLeaf:'1'
                                    },
                                    {
                                        id: '010102',
                                        name: '张二三',
                                        isLeaf:'1'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: '02',
                        name: '李氏',
                        isLeaf:'0',
                        children: [
                            {
                                id: '0201',
                                name: '李四',
                                isLeaf:'1',
                            }
                        ]
                    },
                ],  
                checkedKeys:['010102']
            };
        },
        created(){
        },  
        mounted(){
        },
        watch:{
            filterText(val){
                this.$refs.tree.filter(val)
            }
            
        },
        methods: {
            getChecked(){
                // let checkedArray = this.$refs.tree.getCheckedKeys().concat(this.$refs.tree.getHalfCheckedKeys())
                // this.checkedKeys = [...new Set(checkedArray)]
                // console.log('getHalfCheckedKeys',this.$refs.tree.getHalfCheckedKeys())
                // console.log('checkedArray',checkedArray)
                // console.log('checkedKeys',this.checkedKeys)

                let checkedArray = this.$refs.tree.getCheckedKeys()
                this.checkedKeys = checkedArray
                console.log('checkedKeys',this.checkedKeys)
            },
            filterNode(value,data){
                console.log('value',value,'data',data)
                if(!value) return true
                return data.name.indexOf(value)!=-1
            },
        }
    };
</script>