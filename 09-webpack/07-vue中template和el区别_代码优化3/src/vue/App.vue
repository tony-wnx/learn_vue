<template>
    <div>
        <h2>vue对象中的template部分替换整个div</h2>
        <h2>{{message}}</h2>
    </div>
</template>

<script>
export default {
    name: "App",
    data(){
        return {
            message:'vue中template和el的区别'
        }
    },
    methods:{
        showMsg(){
            console.log(this.message)
        }
    }
}
</script>

<style scoped>

</style>