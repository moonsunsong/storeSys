<template>
    <div>
        <mt-swipe :auto="3000">
            <mt-swipe-item v-for="(pic,index) in imgs" :key="index">
                <img :src="pic.img_url" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                
            }
        },
        props:['imgs'],
        methods:{
            
        },
        created(){
            
        }
    }
</script>

<style scoped>
.mint-swipe{
    width:100%;
    height:450px;
}
.mint-swipe-item{
    width:100%;
    height:100%;
}
.mint-swipe-item img{
    width:100%;
    height:100%;
}
</style>
