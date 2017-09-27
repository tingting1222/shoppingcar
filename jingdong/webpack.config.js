var webpack=require('webpack');
var HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry:__dirname+"/src/main.js",
    output:{
        path:__dirname+"/dist",
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:['babel-loader']
            },{
                test:/\.css$/,
                use:['style-loader','css-loader']
            },{
                test:/\.html$/,
                loader:'html-loader'
            },{
                test:/\.jpg|.png$/,
                use:['url-loader']
            },{
                test:/\.vue$/,
                use:['vue-loader']
            }
        ]
    },
    devServer:{
        host:'localhost',
        port:8888,
        hot:true,
        contentBase:__dirname+'/src/static',
        watchContentBase:true
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        alias:{
            "vue":"vue/dist/vue.js"
        }
    }
};