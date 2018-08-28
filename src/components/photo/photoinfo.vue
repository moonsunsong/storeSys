<template>
    <div id="tmpl">
        <div id="desc">
            <h4>{{imgdetail.title}}</h4>
            <p>{{imgdetail.time}}</p>
            <p class="line"></p>
        </div>
        <!-- 九宫格模块 -->
        <div class="mui-content" id="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <!-- <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"> -->
                        <vue-preview :slides="list" class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"></vue-preview>
                        <!-- <img class="preview-img" :src="item.src" @click="$preview.open(index,list)" height="100"> -->
                    <!-- </li> -->
		        </ul> 
		</div>
        <div>
            <p class="detail">{{imgdetail.description}}</p>
        </div>
        <div class="comment">
            <comment :id=id></comment>
        </div>
    </div>
</template>

<script>
    import common from '../../kits/common.js';
    import {Toast} from 'mint-ui';
    import comment from '../subcom/comment.vue';
    export default {
        data(){
            return {
                id:0,
                imgdetail:'',
                list:[]
            }
        },
        created(){
            this.id = this.$route.params.id;
            this.getImgdetail(this.id);
            this.getUrls(this.id);
        },
        methods:{
            getImgdetail(id){
                var url = common.apidomain+"/php/database.php?id="+id;
                this.$http.jsonp(url).then(function(res){
                    var data = res.body;
                    if(data.id==null){
                        Toast("服务器出错");
                        return;
                    }else{
                        this.imgdetail = data;
                    }
                })
            },
            getUrls(id){
                var url = common.apidomain+"/php/img4vuepreview.php?id="+id;
                this.$http.jsonp(url).then(function(res){
                    var data = res.body;
                    if(data==null){
                        Toast("服务器出错");
                        return;
                    }else{
                        data.forEach(item => {
                            var img = document.createElement('img');
                            img.src = item.src;
                            item.w = img.width;
                            item.h = img.height;
                        });
                        this.list = data;
                        
                    }
                })
            }
        },
        components:{
            comment
        }
    }
</script>

<style scoped>
#desc{
    color:#00bdf7;
    padding:5px;
}
.line{
    width:100%;
    height:1px;
    border:1px solid gray;
}
.mui-content{
    width:100%;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border:none;
    width:100%;
}
.mui-grid-view.mui-grid-9{
    border:none;
    background-color: #fff;
}
</style>
<style>
#mui-content .mui-grid-view.mui-grid-9 .mui-table-view-cell figure{
    display: inline-block;
    width:100px;
    height: 70px;
    margin:10px;
}
#mui-content .mui-grid-view.mui-grid-9 .mui-table-view-cell figure img{
    width:100%;
    height:100%;
}
#mui-content .mui-grid-view.mui-grid-9 .mui-table-view-cell .my-gallery{
    text-align: left;
}
</style>

