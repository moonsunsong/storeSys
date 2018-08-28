<template>
    <div id="tmpl">
        <div class="comment">
            <h2>提交评论</h2>
            <p></p>
            <textarea placeholder="发表评论" v-model="txtcomment"></textarea>
            <mt-button size="large" type="primary" @click="submitcom">提交</mt-button>
        </div>
        <div class="comlist">
            <h3>评论列表</h3>
            <p></p>
            <div v-for="(item,index) in list" :key="index">
                <div class="title">
                    <span>{{index+1}}楼</span>
                    <span>用户:匿名用户</span>
                    <span>发表时间: {{item.add_time | datefmt('YYYY-MM-DD HH:mm:ss')}} </span>
                </div>
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell" v-text="item.content"></li>
                </ul>
            </div>
			
        </div>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui';
    import common from '../../kits/common.js';
    export default {
        props:['id'],
        data:function(){
            return {
                txtcomment:'',
                list:[]
            }
        },
        created(){
            this.getComment(this.id);
        },
        methods:{
            submitcom(){
                Toast('不好意思，没有服务器让你提交');
                this.txtcomment = '';
            },
            getComment(id){
                var url = common.apidomain+"/php/jsonpcomments.php?id="+id;
                this.$http.jsonp(url).then(function(res){
                    var data = res.body;
                    if(data[0].id==null){
                        Toast('服务器没有响应');
                        return ;
                    }
                    this.list = data;
                })
            }
        }
    }
</script>

<style scoped>
p{
    width:100%;
    height:1px;
    border:1px solid rgba(126, 125, 125,0.3);
}
.comment{
    padding:5px;
}
.comlist{
    padding:5px;
}
.title{
    height:30px;
    padding:5px;
    color: #6d6d72;
    font-size: 15px;
    background-color: #eee;
}
.title span{
    margin-right:7px;
}
</style>
