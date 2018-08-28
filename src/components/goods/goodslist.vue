<template>
    <div id="tmpl">
        <div class="mui-content" style="background-color:#fff" id="mui-content">
		    <ul class="mui-table-view mui-grid-view">
		        <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="(item,index) in goodslist" :key="index">
		            <router-link v-bind="{to:'/goods/goodsinfo/'+item.id}">
		                <img class="mui-media-object" :src="item.img_url">
		                <div class="mui-media-body">{{item.title}}</div>
                    </router-link>
                    <div class="desc">
                        <p>
                            <span class="price" v-text="item.sell_price"></span>
                            <s v-text="item.market_price"></s>
                        </p>
                        <p>
                            <span class="left">热卖中</span>
                            <span class="right">剩余77件</span>
                        </p>
                    </div>
                </li>
		    </ul>    
		</div>
    </div>
</template>

<script>
    import common from '../../kits/common.js';
    import {Toast} from 'mint-ui';
    export default {
        data(){
            return {
                goodslist:[]
            }
        },
        created(){
            this.getGoods();
        },
        methods:{
            getGoods(){
                var url = common.apidomain+"/php/goodslist.php";
                this.$http.jsonp(url).then(function(res){
                    var data = res.body;
                    if(data==null){
                        Toast('没有商品');
                        return ;
                    }else{
                        this.goodslist = data;
                    }
                })
            }      
        }
    }
</script>

<style scoped>
.desc{
    width:100%;
    height:70px;
    background-color: rgba(133, 129, 129, 0.1);
    text-align: left;
    padding:5px;
    position:relative;
    margin-top:10px;
}
.desc .price{
    color:rgb(233, 91, 48);
    margin-right:10px;
}
.desc .left{
    position:absolute;
    bottom:5px;
    left:10px;
    font-size: 12px;
}
.desc .right{
    position:absolute;
    bottom:5px;
    right:10px;
    font-size: 12px;
}
#mui-content li,#mui-content li a{
    padding:0;
    margin:0;
}
#mui-content li a img{
    max-height: 230px;
}
#mui-content ul{
    text-align: center;
}
#mui-content li{
    width:45%;
    margin-top:5px;
    margin-left:10px;
    border:1px solid rgba(114, 112, 112, 0.3);
}
#mui-content .mui-media-body{
    text-align: left;
    padding-left:10px;
}
</style>
