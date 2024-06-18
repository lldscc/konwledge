/**
 * 函数 function
 * **/
//1. 函数声明
function getText() {
    return 'text文本'
}
function add(x, y) {
    return x + y
}

//2.匿名函数：通常被用作回调函数, 即将函数作为参数传递给其他函数
// 回调函数：在特定事件或条件发生时被调用的函数，常用于异步编程中
let getText2 = function () {
    return 'text文本2'
}


//3.箭头函数：ES6新增的函数声明方式,是一种匿名函数的简写
    // 省略function关键字
    // 当只有一个参数时,可以省略参数的括号
    // 当函数体只有一条语句时,可以省略大括号和return关键字
let add3 = x => x + 1
let add2 = (x, y) => x + y
let getText3 = () => 'text文本3'
console.log(add3(1))
console.log(add2(1,1))
console.log(getText3())




