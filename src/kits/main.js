
//导入vue核心包
import Vue from 'vue';
//导入app.vue的vue对象
import app from './app.vue';
//导入vue-router组件
import vueRouter from 'vue-router';
//绑定到Vue对象上
Vue.use(vueRouter);
//导入vue-preview组件
import vuePreview from 'vue-preview';
Vue.use(vuePreview);

//导入页面模块vue组件
import home from '../components/Home.vue';
import shopcar from '../components/shopcar/car.vue';
import newslist from '../components/news/newslist.vue';
import newsinfo from '../components/news/newsinfo.vue';
import photolist from '../components/photo/photolist.vue';
import photoinfo from '../components/photo/photoinfo.vue';
import goodslist from '../components/goods/goodslist.vue';
import goodsinfo from '../components/goods/goodsinfo.vue';
import goodsdesc from '../components/goods/goodsdesc.vue';
import goodscomment from '../components/goods/goodscomment.vue';

//导入mint-ui
import mintui from 'mint-ui';
//导入样式
import 'mint-ui/lib/style.min.css';
//使用mintui组件
Vue.use(mintui);
//引入mui的css样式
import '../../statics/mui/css/mui.css';
//引入vue-resource，会自动给Vue对象注入$http方法
import vueResource from 'vue-resource';
//引入moment
import moment from 'moment';
Vue.filter('datefmt',function(input,fmt){
    return moment(input).format(fmt);
})
Vue.use(vueResource);
//定义路由规则
var router1 = new vueRouter({
    linkActiveClass:'mui-active',
    routes:[  //特别注意，这里是routes！！！！！！！！！！！！！！
        {
            path:'/',
            redirect:'home'  //重定向到home页面，一开始就进入/home页面
        },
        {
            path:'/home',
            component:home
        },
        {
            path:'/shopcar',
            component:shopcar
        },
        {
            path:'/news/newslist',
            component:newslist
        },
        {
            path:'/news/newsinfo/:id',
            component:newsinfo
        },
        {
            path:'/photo/photolist',
            component:photolist
        },
        {
            path:'/photo/photoinfo/:id',
            component:photoinfo
        },
        {
            path:'/goods/goodslist',
            component:goodslist
        },
        {
            path:'/goods/goodsinfo/:id',
            component:goodsinfo
        },
        {
            path:'/goods/goodsdesc/:id',
            component:goodsdesc
        },
        {
            path:'/goods/goodscomment/:id',
            component:goodscomment
        }
    ]
})

//导入系统的基本全局样式
import '../../statics/css/site.css';

//利用vue对象进行渲染
new Vue({
    el:'#app',
    router:router1,//使用路由对象指令
    // render:function(create){create(app)}//es5写法
    render:create=>create(app)
    
    
})