const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig,{
    contentBase:'./dist', 
    port:8080,
    inline:true 
})