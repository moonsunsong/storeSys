<template>
    <!-- 轮播模块 -->
    <div id="tmpl">
        <slider :imgs="list"></slider>
        <!-- 九宫格模块 -->
        <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/news/newslist">
                            <span class="mui-icon mui-icon-home"></span>
                            <div class="mui-media-body">新闻资讯</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/photo/photolist">
                            <span class="mui-icon mui-icon-email"></span>
                            <div class="mui-media-body">图片分享</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/goods/goodslist">
                            <span class="mui-icon mui-icon-chatbubble"></span>
                            <div class="mui-media-body">商品购买</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/feedback">
                            <span class="mui-icon mui-icon-location"></span>
                            <div class="mui-media-body">留言反馈</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/video">
                            <span class="mui-icon mui-icon-search"></span>
                            <div class="mui-media-body">视频专区</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/callme">
                            <span class="mui-icon mui-icon-phone"></span>
                            <div class="mui-media-body">联系我们</div>
                        </router-link>
                    </li>
		        </ul> 
		</div>
    </div>
    
</template>

<script>
import {Toast} from 'mint-ui';//使用mint-ui的Toast必须在使用页面导入
import common from '../kits/common.js';
import slider from './subcom/slider.vue';
    export default {
        data:function(){
            return {
                list:[],
                height:250
            }
        },
        created(){
            this.getImg();
        },
        methods:{
            getImg:function(){
                var url = common.apidomain+"/php/jsonptest.php";
                this.$http.jsonp(url).then(function(res){
                    var data = res.body;
                    if(data[0]==null){
                        Toast('服务器没有响应');
                        return ;
                    }
                    this.list = data;
                })
            }
        },
        components:{
            slider
        }
    }
</script>

<style scoped>
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border:none;
}
.mui-grid-view.mui-grid-9{
    border:none;
    background-color: #fff;
}
.mui-icon-home:before{
    content:'';
    display:inline-block;
    width:50px;
    height:50px;
    background-image: url(../../statics/imgs/1.png);
    background-repeat: round;
}
.mui-icon-email:before{
    content:'';
    display:inline-block;
    width:50px;
    height:50px;
    background-image: url(../../statics/imgs/2.png);
    background-repeat: round;
}
.mui-icon-chatbubble:before{
    content:'';
    display:inline-block;
    width:50px;
    height:50px;
    background-image: url(../../statics/imgs/3.png);
    background-repeat: round;
}
.mui-icon-location:before{
    content:'';
    display:inline-block;
    width:50px;
    height:50px;
    background-image: url(../../statics/imgs/3.png);
    background-repeat: round;
}
.mui-icon-search:before{
    content:'';
    display:inline-block;
    width:50px;
    height:50px;
    background-image: url(../../statics/imgs/4.png);
    background-repeat: round;
}
.mui-icon-phone:before{
    content:'';
    display:inline-block;
    width:50px;
    height:50px;
    background-image: url(../../statics/imgs/5.png);
    background-repeat: round;
}
</style>

