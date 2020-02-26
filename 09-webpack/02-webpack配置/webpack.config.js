
// ①按如下写完后,在终端输入webpack命令,发现报错：
//  Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.
//  - configuration.output.path: The provided value "./dist" is not an absolute path!
// ②因此,我们不能把path写死,而是需要动态的获取,这时就需要导入一个path模块(node.js自己的模块)
// 
// ②导入path模块来动态获取path
// ③通过path.resolve(__dirname,'dist')替换写死的路径
// ④在终端执行命令：webpack，打包成功！
// 
// 我们一般不是用webpack命令进行打包，而是推荐使用 npm run xxx
// 在package.json文件进行配置,在scripts部分添加：
// "build":"webpack", 然后在终端执行命令： npm run build
// 这时会优先使用局部webpack,当局部不存在时,才使用全局的

const path = require('path')

module.exports = {
    entry:'./src/main.js',
    output:{
        // path:'./dist',
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    }
}