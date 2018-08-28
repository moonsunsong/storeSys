var htmlWp = require('html-webpack-plugin');
module.exports={
    entry:'./src/kits/main.js',
    output:{
        path:__dirname+'/dist',
        filename:'build.js'   
    },
    module:{
        loaders:[
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            },
            {
                test:/\.scss$/,
                loader:'style-loader!css-loader!sass-loader'
            },
            {
                test:/\.less$/,
                loader:'style-loader!css-loader!less-loader'
            },
            {
                test:/\.(jpg|gif|png|ttf|ico)$/,
                loader:'url-loader?limit=25000' //limit表示图片大小的临界值
            },
            // {
            //     test:/\.js$/,
            //     loader:'babel-loader',            //webpack2.x和3.x原生支持es6转es5
            //     exclude:/node_modules/
            // },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            // {
            //     test:/vue-preview.src.*?js$/,    //vue-preview组件专用
            //     loader:'babel'
            // }
            
        ]
    },
    // babel:{
    //     presets:['es2015'],
    //     plugins:['transform-runtime']              //webpack2.x和3.x原生支持es6转es5
    // },
    plugins:[
        new htmlWp({
            title:'首页',
            filename:'index.html',
            template:'index1.html',
            favicon:'favicon.ico'
        })
    ]
}