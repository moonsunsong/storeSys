<template>
    <div id="tmpl">
        <ul class="mui-table-view">
			<li v-for="(item,index) in list" :key="index" class="mui-table-view-cell mui-media">
				<router-link v-bind="{to:'/news/newsinfo/'+item.id}" >
					<img class="mui-media-object mui-pull-left" :src="item.img_url">
					<div class="mui-media-body">
						{{item.title}}
						<p class='mui-ellipsis' v-text="item.zhaiyao"></p>
						<div class="ft">
							<span>发表时间:{{item.add_time | datefmt('YYYY-MM-DD HH:mm:ss')}}</span>
							<span class="click">点击数：{{item.click}}</span>
						</div>
					</div>
				</router-link>
			</li>
		</ul>
    </div>
</template>

<script>
    import common from '../../kits/common.js';
    export default {
        data:function(){
            return {
                list:[{
						  "id": 1,
						  "title": "1季度多家房企利润跌幅超50% 去库存促销战打响",
						  "add_time": "2015-04-16T03:50:28.000Z",
						  "zhaiyao": "房企一季度销售业绩已经陆续公布，克而瑞研究中心统计",
						  "click": 1,
						  "img_url": common.apidomain+"/pics/nanase01.jpg"
						},
						{
						  "id": 2,
						  "title": "买房还是炒股，2015年买房无法拒绝的5大理由",
						  "add_time": "2015-04-16T04:05:34.000Z",
						  "zhaiyao": "转眼间2015年已经过去了4个月，在这短短的四个月",
						  "click": 2,
						  "img_url": common.apidomain+"/pics/nanase02.jpg"
						}
                ],
                created(){

                },
                methods:{
                    getList(){

                    }
                }
            }
        }
    }
</script>

<style scoped>
.ft{
    color:#0094ff;
    font-size: 12px;
    margin-top:1em;
}
.click{
    margin-left:20px;
}
.mui-table-view .mui-media-object{
    max-width:80px;
	height:80px;
}
</style>
