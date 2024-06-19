// 声明变量
// var 全局作用域 
// const 不能重新赋值 局部作用域
// let 可以重新赋值 局部作用域
/**
 * 一.常量Constant
 * */
// 1.const 声明常量
// 2.不能重新赋值
const name1 = '张三'
const age = 20

console.log('name', name1);
console.log('age', age);

console.log('name类型：',typeof name1)
console.log('name类型：',typeof age) //类型

console.log('------------------')
/**
 * 二.变量Variable
 * */
// 1.let  声明变量
// 2.可以重新赋值
let address
address = '上海市'
console.log('address', address);

