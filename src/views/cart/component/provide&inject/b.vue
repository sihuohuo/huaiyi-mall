<template>
    <div>
        <p>{{foo}}</p>
        <p>{{bar}}</p>
    </div>
</template>
<script>
export default {
    name: 'proB',// 子组件b
    //inject 是一个字符串数组 或 一个对象
    inject:{
        foo:{
            from:'foo',
            default:'inject，foo默认值'
        },
        bar:{
            from:'bar',
            default:'inject，bar默认值'
        }
    },
    data(){
        return {

        }
    },
    created() {
        this.foo.a = 'lisa'
        console.log('foo',this.foo)
    },
    methods:{

    }
}
</script>