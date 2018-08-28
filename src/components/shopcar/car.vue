<template>
    <div id="tmpl">
        <div class="row" v-for="(item,index) in datalist" :key="index">
            <mt-switch id="switch" v-model="value[index]"></mt-switch>
            <img :src="item.urls[0].img_url" alt="">
            <div class="inforight">
                <h4>{{item.title}}</h4>
                <ul>
                    <li>￥{{item.sell_price}}</li>
                    <li>共计：{{counts[index]}}件</li>
                    <li class="del" @click="delGoods(item.id,index)">删除</li>
                </ul>
            </div>
        </div>
        <div id="totalprice">
            <div class="left">
                <h5>总计(不含运费)</h5>
                <span>已勾选商品{{totalcount}}件，总价{{totalprice}}元</span>
            </div>
            <div class="right">
                <mt-button type="danger" size="small">去结算</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
    import {getlocalStorage,key,removeSgById} from '../../kits/localSg.js';
    import common from '../../kits/common.js';
    import {Toast} from 'mint-ui';
    export default {
        data(){
            return {
                value:[],
                datalist:[],
                imgurl:'',
                counts:[],
                totalprice:0
            }
        },
        computed:{
            totalcount(){
                var value = this.value.filter(function(item){return item});
                var amount = 0;
                this.value.forEach((item,index) => {
                    if(item){
                        var price = this.datalist[index].sell_price;
                        var count = this.datalist[index].count;
                        amount += price*count;
                    }
                });
                this.totalprice = amount;
                return value.length;
            }
        },
        created(){
            //从localStorage中获取goods信息
            var obj = getlocalStorage(key);
            for (var key in obj) {
                this.counts.push(obj[key]); 
            }
            var ids = '';
            for (var key in obj) {
                ids+= key+",";
            }
            var idsstr = ids.substring(0,ids.length-1);
            this.getInfo(idsstr)
        },
        methods:{
            getInfo(ids){
                var url = common.apidomain+'/php/cartlist.php?ids='+ids;
                this.$http.jsonp(url).then(function(res){
                    var data = res.body;
                    if(data[0]==null){
                        Toast('没有商品');
                        return;
                    }else{
                        this.datalist = data;
                    }
                    for(var i=0;i<data.length;i++){
                        this.value[i]=false;
                    }

                    for(var i=0;i<this.counts.length;i++){
                        this.datalist[i].count = this.counts[i];
                    }
                })
            },
            delGoods(id,index){
                //删除value中的对应数据
                this.value.splice(index,1);
                //删除datalist中的对应数据
                this.datalist.splice(index,1);
                //删除localStorage中的对应数据
                removeSgById(id);
            }
        }
    }
</script>

<style scoped>
.row{
    display: flex;
    height:102px;
    border-bottom:1px solid rgba(126, 123, 123, 0.3);
    margin-top:7px;
}
.row #switch{
    margin-right:10px;
}
.row h4{
    flex:0 0 250px;
    color:rgba(11, 212, 219, 0.8)
}
.row .inforight{
    flex:1;
}
.row ul{
    list-style-type: none;
    display:flex;
    justify-content:flex-start;
    padding:10px 0 0 0;
}
.row img{
    width:77px;
    height:100px;
    flex:0 0 77px;
    margin-right:10px;
}
.row ul li{
    margin-right:20px;
}
.row ul li:first-child{
    color:red;
}
.row ul li:last-child{
    color:rgba(9, 171, 177, 0.8);
    cursor: pointer;
}
#totalprice{
    background-color: rgba(139, 187, 151,0.2);
    height:70px;
    overflow: hidden;
    position: relative;
}
#totalprice .left{
    height:100%;
    width:60%;
    font-size: 14px;
    margin-top:10px;
    position: absolute;
    left:10px;
}
#totalprice .left h5{
    font-weight: 600;
}
#totalprice .right{
    position: absolute;
    top:20px;
    right:50px;
}
</style>

