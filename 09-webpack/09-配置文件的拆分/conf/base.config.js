const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'bundle.js'
    },
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
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}