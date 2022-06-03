<template>
    <div>
        <slot-a>
            <template v-slot:one="{name='默认值'}">
                {{name}}
            </template>
        </slot-a>
    </div>
</template>
<script>
import slotA from './a.vue'
export default {
    name:'slotB',
    components:{
        slotA,
    },
    data(){
        return {

        }
    },
    methods:{
        
    },
}
</script>
