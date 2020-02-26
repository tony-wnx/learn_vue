const app = new Vue({
    el:'#app',
    data:{
        message:'案例：购物车清单',
        books:[
            {
                id:1,
                name:'《算法导论》',
                date:'2011-5-6',
                price:85.00,
                count:1
            },
            {
                id:2,
                name:'《Java编程》',
                date:'2008-7-8',
                price:95.00,
                count:1
            },
            {
                id:1,
                name:'《设计模式》',
                date:'2015-3-6',
                price:39.00,
                count:1
            },
            {
                id:1,
                name:'《架构的演变》',
                date:'2018-5-15',
                price:76.00,
                count:1
            },
            {
                id:1,
                name:'《编程艺术》',
                date:'2009-8-12',
                price:99.00,
                count:1
            }
        ],
        nums:[10,20,30,100,110,180,50,70,90]
    },
    methods:{
        increment(index){
            this.books[index].count++
        },
        decrement(index){
            this.books[index].count--
            // let num = this.books[index].count;
            // if(num>1){
            //     return this.books[index].count--;
            // }
        },
        // 点击移除购物车中物品信息
        remove(index){
            this.books.splice(index,1)
        }
    },
    // 过滤器，价格显示两位小数
    filters:{
        showPrice(price){
            return '￥' + price.toFixed(2)
        }
    },
    computed:{
        // 循环遍历的方法一：
        totalPrice1(){
            let result = 0;
            for(let i=0;i<this.books.length;i++){
                result += this.books[i].price * this.books[i].count
            }
            return result
        },

        // 循环遍历方法二：
        totalPrice2(){
            let result = 0;
            for(let i in this.books){
                result += this.books[i].price * this.books[i].count
            }
            return result
        },

        // 循环遍历方法三：
         totalPrice3(){
            let result = 0;
            for(book of this.books){
                result += book.price * book.count
            }
            return result
        },

        // js高阶函数以及箭头函数的使用 filter/map/reduce
        totalPrice4(){
            // filter函数一般用于过滤
            // 需求：得到nums数组中大于100的数

            // ①传统for循环：然后创建一个空数组，把过滤出来的数添加到这个新数组中
            // newArr = []
            // for(n of this.nums){
            //     if(n<100){
            //         newArr.push(n)
            //     }
            // }
            // return newArr

            // ②filter高阶函数。
            // filter(f(n))函数有一个参数，参数也是一个函数f(n),其中的参数n表示nums数组中的每一项,
            // filter函数会遍历nums数组，每次取出一个元素赋值给f(n)函数的参数n，它固定返回一个boolean值，
            // 当返回true时，把该元素添加到内部生成的一个数组中；返回false时，不添加到数组
            let newArr = this.nums.filter(function(n){
                return n < 100
            })
            return newArr

        },
        totalPrice5(){
            // map函数：可以对数组进行一些复杂的操作
            // 需求：返回nums数组中的每一项 * 2后的数值
            // ①传统的for循环：创建一个空数组，遍历nums数组，每项*2后放入该空数组
            // ②map高阶函数
            // map函数也有个参数，参数也是一个函数f(n),它也会遍历nums数组，每次取出一项赋值给f(n)函数的
            // 参数n，然后可以在f(n)函数中对数据进行操作
            let newArr = this.nums.map(function(n){
                return n * 2
            })
            return newArr
        },
        totalPrice6(){
            // reduce函数：对数组进行汇总
            // 需求：返回nums数组中各项相加的和
            // ①传统的for循环
            // ②reduce高阶函数
            // reduce函数主要有两个参数，一个是f(previousValue,n)函数，一个是previousValue的初始化
            // 数值m(一般设为0)，它也会遍历数组nums，每次取出一项，然后载函数f(preValue,n)中进行相关操作

            // 以数组nums:[10,20,30,100,110,180,50,70,90]为例
            // 第一次： previousValue = 0 (reduce函数的第二个参数设置为几就是几，这里设置为了0)，n = 10
            // 第二次： previousValue = 0 + 10 ；n = 20
            // 第三次： previousValue = 10 + 20 ；n = 30
            // 第四次： previousValue = 30 + 30 ；n = 100
            // 第五次： previousValue = 60 + 100 ；n = 110
            // 第六次： previousValue = 160 + 110 ；n = 180
            // 第七次： previousValue = 270 + 180 ；n = 50
            // 第八次： previousValue = 450 + 50 ；n = 70
            // 第九次： previousValue = 500 + 70 ；n = 90
            // 结果：  570 + 90 = 660

            // 每循环完后就会把return的结果当做下一次循环的previousValue的值，n就是这次取出来的值
            let result = this.nums.reduce(function(previousValuen,n){
                return previousValuen + n
            },0)
            return result
        },
        totalPrice7(){
            // 需求：从nums数组中得到小于100的数值，然后各自*2，再汇总各项的和
            let result = this.nums.filter(function(n){
                return n < 100
            }).map(function(n){
                return n * 2
            }).reduce(function(preValue,n){
                return preValue + n
            },0)
            return result
        },
        totalPrice8(){
            // 需求：从nums数组中得到小于100的数值，然后各自*2，再汇总各项的和
            // 更简洁的箭头函数改造
            return this.nums.filter(n => n < 100).map(n => n * 2).reduce((preValue,n) => preValue + n)
        }
    }
})