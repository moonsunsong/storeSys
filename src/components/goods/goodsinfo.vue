<template>
    <div id="tmpl">
        <!-- 轮播图区域 -->
        <div class="borderStyle">
            <slider :imgs="imgs"></slider>
        </div>
        <!-- 价格区 -->
        <div class="borderStyle">
            <div class="pricePart">
                <h3 class="title">{{goodsinfo.title}}</h3>
                <p class="line"></p>
                <p class="price">
                    <ul>
                        <li>
                            <span>市场价：<s>{{goodsinfo.market_price}}</s></span>
                            <span>销售价：<span class="sellPrice">{{goodsinfo.sell_price}}</span></span>
                        </li>
                        <li>
                            <!-- 导入inputNumber.vue -->
                            <span>购买数量：</span>
                            <transition name="show"
                            @before-enter="beforeEnter" @after-enter="afterEnter" @enter="enter">
                                <div v-if="isshow" id="ball"></div>
                            </transition>
                            <inputNumber @sendtogoodsinfo="getCount" class="inputnumber"></inputNumber>
                        </li>
                        <li>
                            <mt-button type="primary" size="small" class="btn_left">立即购买</mt-button>
                            <mt-button type="danger" size="small" @click="addToCart">加入购物车</mt-button>
                        </li>
                    </ul>
                </p>
            </div>
        </div>
        <!-- 详情描述区 -->
        <div class="borderStyle">
            <div class="desc">
                <h6>商品参数</h6>
                <p class="line"></p>
                <ul class="details">
                    <li>商品货号：{{goodsinfo.goodsnumber}}</li>
                    <li>库存情况：{{goodsinfo.stock_quantity}} 件</li>
                    <li>上架时间：{{goodsinfo.time}}</li>
                </ul>
            </div>
        </div>
        <div class="borderStyle">
            <div class="btn">
                <router-link v-bind="{to:'/goods/goodsdesc/'+id}">
                    <mt-button class="btn_detail" type="primary" size="large" plain>图文详情</mt-button>
                </router-link>
                <router-link v-bind="{to:'/goods/goodscomment/'+id}">
                    <mt-button type="danger" size="large" plain>商品评论</mt-button>
                </router-link>
            </div>
        </div>
        <div id="dis" style=""></div>
    </div>
</template>

<script>
    import slider from '../subcom/slider.h450.vue';
    import common from '../../kits/common.js';
    import inputNumber from '../subcom/inputNumber.vue';
    //引入传值用的vm对象
    import {vm,COUNTSTR} from '../../kits/vm.js';
    //导入localstorage操作插件
    import {setItem,jsonobj} from '../../kits/localSg.js';
    import {Toast} from 'mint-ui';

    export default {
        data(){
            return {
                id:0,
                goodsinfo:[],
                imgs:[],
                goodsCount:1,
                isshow:false
            }
        },
        created(){
            this.id = this.$route.params.id;
            this.getImg(this.id);
        },
        methods:{
            getImg(id){
                var url = common.apidomain+"/php/goodsinfo.php?id="+id;
                this.$http.jsonp(url).then(function(res){
                    var data = res.body;
                    if(data==null){
                        Toast('出错！！');
                        return ;
                    }else{
                        this.goodsinfo = data;
                        this.imgs = data.urls;
                    }
                })
            },
            getCount(count){
                this.goodsCount = count;
            },
            addToCart(){
                vm.$emit(COUNTSTR,this.goodsCount);
                jsonobj.goodsid = this.id;
                jsonobj.goodscount = this.goodsCount;
                setItem(jsonobj);
                this.isshow = !this.isshow;
            },
            beforeEnter(el){
                el.style.transform="translate(0px,0px)";
            },
            enter(el,done){
                el.offsetWidth;
                var e = document.documentElement.scrollTop;
                e +=170;
                el.style.transform = "translate(140px,"+e+"px)";
                done();
            },
            afterEnter(el){
                this.isshow = !this.isshow;
            }
        },
        components:{
            slider,
            inputNumber
        }
    }
</script>

<style scoped>
.pricePart .title{
    letter-spacing: 2px;
    text-align: center;
    font-size: 20px;
    color:rgb(12, 158, 184);
}
.pricePart .price span{
    margin-right:10px;
}
.pricePart .price .sellPrice{
    color:rgb(228, 95, 19);
}
.price .btn_left{
    margin-right:10px;
}
.borderStyle{
    border:1px solid rgba(119, 119, 119, 0.2);
    border-radius: 8px;
    margin:2px;
    padding:5px;
}
.pricePart .price li{
    margin-top:15px;
}
.desc .details li{
    margin:15px 0;
}
.btn .btn_detail{
    margin-bottom:15px;
}
li{
    list-style-type: none;
}
.inputnumber{
    width:100px;
    display: inline-block;
}
.price li{
    position: relative;
}
#ball{
    width:20px;
    height:20px;
    border-radius: 50%;
    background-color: red;
    position:absolute;
    top:0;
    left:115px;
    transition:all 0.4s ease;
    z-index: 100;
}
</style>
