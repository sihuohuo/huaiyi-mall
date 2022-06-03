<template>
    <el-table
        ref="radioTable"
        :data="tableData"
        highlight-current-row
        @current-change="handleCurrentChange"
        style="width: 100%"
    >
        <el-table-column type="index" width="50"></el-table-column>
        <template>
            <i v-for="{key,value} in searchColumn"  :key="key">
                <el-table-column :prop="key" width="100" :label="value"></el-table-column>
            </i>
            
        </template>
    
    </el-table>
</template>
<script>
export default {
    name:'radioTable',
    data(){
        return{
            
        }
    },
    mthods:{

    }
}
</script>