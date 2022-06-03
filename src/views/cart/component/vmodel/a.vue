<template>
    <div>
       <model-b v-model="msg"></model-b> 
    </div>
</template>
<script>
import modelB from './b.vue'
export default {
    name:'modelA',
    components:{
        modelB,
    },
    data(){
        return{
            msg:'55555'
        }
        
    },
}
</script>