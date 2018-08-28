<template>
    <div id="tmpl">
        <div id="cate">
            <ul v-bind="{style:'width:'+ulWidth+'px'}">
                <li @click="clearList();getImgs()">全部</li>
                <li v-for="(item,index) in cates" :key="index" @click="clearList();getImgs(item.id)">{{item.title}}</li>
            </ul>
        </div>

        <div id="imglist">
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    <router-link v-bind="{to:'/photo/photoinfo/'+item.id}">
                        <img v-lazy="item.img_url" :alt="item.title">
                            <!-- <img :src="item.img_url"> -->
                        <div id="desc">
                            <h5 v-text="item.title"></h5>
                            <p v-text="item.description"></p>
                        </div>
                    </router-link>
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
                cates:[],    //存放目录信息
                ulWidth:'',
                list:[],   //存放图片数据的数组
                templist:[]
            }
        },
        created(){
            this.getCates();
            this.getImgs();
        },
        mounted(){
            // this.list = [];
        }
        ,
        methods:{
            getCates(){
                var url = common.apidomain+"/php/jsonpcates.php";
                this.$http.jsonp(url).then(function(res){
                    var data = res.body;
                    var li = 54;
                    if(data[0].id==null){
                        Toast('服务器没有响应');
                    }else{
                        this.cates = data;
                        this.ulWidth = li*(data.length+1);
                    }
                    
                })
            },
            getImgs(id=0){
                var url = common.apidomain+"/php/jsonpcateimg.php?id="+id;
                this.$http.jsonp(url).then(function(res){
                    var data = res.body;
                    // console.log(data);
                    if(data[0].img_url==null){
                        Toast('没有图片');
                        this.list=null;
                    }else{
                        this.list = data;
                        this.templist = data;
                    }
                })
            },
            clearList(){  //解决mint-ui不能刷新显示区域内图片的问题
                this.list = [];
            }
        }
    }
</script>

<style scoped>
#cate{
    max-width: 600px;
    width:100%;
    overflow-x: auto;
    margin:0 auto;
}
#cate ul{
    padding-left:10px;
}
#cate ul li{
    list-style-type: none;
    display:inline-block;
    color:#0094ff;
    font-size: 10px;
    padding-left:6px;
    cursor: pointer;
}
#imglist{
    max-width: 600px;
    width:100%;
    margin:0 auto;
}
#imglist li{
    width:100%;
    position: relative;
    text-align: center;

}

#imglist li img[lazy=loading] {
    width: 40px;
    height: 300px;
    background-color: rgb(172, 170, 170);
}
#imglist li img{
    width:100%;

}

li{
    list-style-type: none;
}
#desc{
    width:100%;
    position: absolute;
    bottom:5px;
    left:0;
    /* z-index: 0; */
    background-color:rgba(122, 120, 120, 0.3);
    padding:5px;
}
#desc h5,#desc p{
    text-align: left;
    color: rgb(255, 255, 255);
}
</style>

