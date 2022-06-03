<template>
    <div>
        <p>{{foo}}</p>
        <p>{{bar}}</p>
    </div>
</template>
<script>
export default {
    name:'proB',// 子组件b
    inject:{
        foo:{
            from:'foo',
            default:'子组件foo默认值'
        },
        bar:{
            from:'bar',
            default:'子组件bar默认值'
        }
    },
    data(){
        return {

        }
    },
    created(){
        console.log('foo',this.foo)
    },
    methods:{

    }
}
</script>