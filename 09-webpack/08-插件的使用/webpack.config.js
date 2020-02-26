const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    // plugins: [
    //     new VueLoaderPlugin()
    // ],
    module:{
        loaders:[
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        }
    },
    plugins:[
        new webpack.BannerPlugin('版权归tony所有！'),
        // 默认生成,不含<div id="app"></div>
        // new HtmlWebpackPlugin()

        // 该命令会在当前文件所在目录下查找有没有index.html文件,有的话就以该文件为模板进行生成
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        // 这个测试中一般不用,只有在发布的时候才用,否则调试起来不方便
        // new UglifyjsWebpackPlugin()
    ],
    // 添加配置构建本地服务器
    devServer:{
        contentBase:'./dist',   // 监听的文件夹
        port:8080,          // 端口号
        inline:true   // 页面实时刷新
    }
}