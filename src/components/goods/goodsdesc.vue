<template>
    <div id="tmpl">
        <h3 v-text="details.title" class="title"></h3>
        <p class="line"></p>
        <p v-html="details.description"></p>
        <img :src="img.img_url" alt="">
    </div>
</template>

<script>
    import common from '../../kits/common.js';
    import {Toast} from 'mint-ui';
    export default {
        data(){
            return {
                id:0,
                img:'',
                details:[]
            }
        },
        created(){
            this.id = this.$route.params.id;
            this.getgoodsdesc(this.id);
        },
        methods:{
            getgoodsdesc(id){
                var url = common.apidomain+"/php/goodsinfo.php?id="+id;
                this.$http.jsonp(url).then(function(res){
                    var data = res.body;
                    if(data==null){
                        Toast('服务器出错');
                        return ;
                    }else{
                        this.details = data;
                        this.img = data.urls[0];
                    }
                })
            }
        }
    }
</script>

<style scoped>
.title{
    color: rgb(12, 154, 219);
}
</style>
