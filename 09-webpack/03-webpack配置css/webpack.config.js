const path = require('path')

module.exports = {
    entry:'./src/main.js',
    output:{
        // path:'./dist',
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        loaders:[
        // rules:[    版本差别,3.6.0版本使用这个打包报错
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
              }
        ]
    }
}