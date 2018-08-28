<template>
    <div id="tmpl">
        <div>第{{info.id}}张图片</div>
        <div>
            <img :src="info.url" alt="" width="400" height="250">
        </div>
        <div>
            <span>图片描述：</span>{{info.description}}
        </div>

        <comment :id="id"></comment>
    </div>
</template>

<script>
    import common from '../../kits/common.js';
    import comment from '../subcom/comment.vue'
    export default {
        components:{
            comment
        },
        data:function(){
            return {
                id:-1,
                info:''
            }
            
        },
        created(){
            //获取URL传入的参数
            this.id = this.$route.params.id;
            this.getInfo(this.id);
        },
        methods:{
            getInfo(id){
                var url = common.apidomain+"/php/jsonpinfo.php?id="+id;
                this.$http.jsonp(url).then(function(res){
                    var data = res.body;
                    try {
                        var u = data.url;
                        u=null;
                    } catch (error) {
                        Toast('服务器没有响应');
                        return ;
                    }
                    this.info = data;
                })
            }
        }
    }
</script>

<style scoped>

</style>
