<template>
    <div id="tmpl">
        <!-- 使用mint-ui中的header组件实现系统头部 -->
        <mt-header fixed title="我的vue2.0练习项目"></mt-header>
        <div id="backto"><a href="javascript:void(0);" @click="backto" v-show="isshow">返回</a></div>
        <!-- 使用vue-router的router-vue进行站位 -->
        <router-view></router-view>
        <!-- 使用mui实现系统的底部 -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/tabbar-with-chat">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-contact">
                    <span id="badge" class="mui-badge">0</span>
                </span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>

<script>
    import {vm,COUNTSTR} from './vm.js';
    //使用$on来注册名字为COUNT的事件
    vm.$on(COUNTSTR,function(count){
        var badge = document.getElementById('badge');
        badge.innerHTML = parseInt(badge.innerHTML)+count;
    })
    export default {
        data(){
            return {
                isshow:false
            }
        },
        watch:{
            '$route':function(newroute,oldroute){
                if(newroute.path.toLowerCase()=='/home'){
                    this.isshow = false;
                }else{
                    this.isshow = true;
                }
            }
        },
        methods:{
            backto(){
                this.$router.go(-1);
            }
        },
        created(){
            if(this.$route.path.toLowerCase!='/home'){
                this.isshow = true;
            }
        }
    }
</script>
<style scoped>
div{
    margin:0 auto;
}
#backto{
    position: fixed;
    top:10px;
    left:10px;
    z-index: 100;
}
#backto a{
    color:white;
    font-weight: 600;

}
</style>

