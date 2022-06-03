<template>
    <div>
        <div class="g-checkbox">
            <h4>自定义的checkbox-group</h4>
            <h1>{{checkStr}}</h1>
            <y-checkbox v-model="checkStr" :source="m_checkList" :min="1" :max="3"></y-checkbox>
        </div>
        <br>
        <div class="g-checkbox">
            <y-tree></y-tree>
        </div>
        <br>
        <div class="g-checkbox">
            <y-search v-model="searchStr" :multiple="false"></y-search>
            <h1>{{searchStr}}</h1>
        </div>
        <br>
        <br>
        <div class="g-checkbox">
            <y-search v-model="searchArr" :multiple="true"></y-search>
            <h1>{{searchArr}}</h1>
        </div>
        <br>
        <el-button type="primary" size="small" @click="back">back</el-button>
        <div>
            <el-button type="primary" size="small" @click="changeComponent">change</el-button>
            <component :is="isComponent"></component>
        </div>
        <pro-a></pro-a>
        <parent-a></parent-a>
        <attrs-a></attrs-a>
        <slot-b></slot-b>
        <model-a></model-a>
        {{timeData}}
        
    </div>
</template>

<script>

import aaa from './component/a.vue'
import bbb from './component/b.vue'
import proA from './component/provide&inject/a.vue'
import parentA from './component/childer&parent/parentA.vue'
import attrsA from './component/attrs&listenters/a.vue'
import slotB from './component/slot/b.vue'
import YElCheckbox from '../../components/global/y-checkbox.vue'
import modelA from './component/vmodel/a.vue'
import YTree from '../../components/global/y-tree.vue'
import YSearch from '../../components/global/y-search.vue'
import Index from '../index.vue'
export default {
    name:'Cart',
    components:{
    aaa,
    bbb,
    proA,
    parentA,
    attrsA,
    slotB,
    YElCheckbox,
    modelA,
    YTree,
        Index
},
    data(){
        return{
            isComponent:'bbb',
            checkStr:'01010',
            m_checkList:[
                {text:'湖南',value:'0'},
                {text:'广东',value:'1'},
                {text:'湖北',value:'2'},
                {text:'山东',value:'3'},
                {text:'河北',value:'4'},
            ],
            searchStr:"",
            searchArr:[
                { "id": "01", "name": "张三", "sex": "01" },
                { id: "03", name: "雪莉", sex: "02" },
                
            ],
            timeData:'aaa',
            multiple:false,
        }
    },
    mounted(){
        let arr = 1>0 && [1,2,3]
        console.log('arr',arr)
        this.setTimeData()
    },
    methods:{
        async setTimeData(){
            await setTimeout(()=>{
                this.timeData = 'bbb'
            },1000 )
        },
        back(){
            this.$router.back()
        },
        changeComponent(){
            if(this.isComponent == 'aaa'){
                this.isComponent = 'bbb'
            }else{
                this.isComponent = 'aaa'
            }
        },
    }
}
</script>
<style lang="scss" scoped>
    .g-checkbox{
        // height: 40px;
        // width:300px;
        padding:10px;
        border: 1px solid red;
    }
</style>