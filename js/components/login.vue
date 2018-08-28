<template>
    <div>
        <button @click="tip">登录</button>
    </div>
</template>

<script>
import { Toast} from 'mint-ui';
    export default {
        methods:{
            tip:function(){
                Toast('登陆成功');
            }
        }
    }
</script>

<style scoped>

</style>