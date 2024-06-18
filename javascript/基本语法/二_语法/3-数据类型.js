/*
数值类型：整数、小数、正数、负数
字符串类型：单引号、双引号、反引号包裹
布尔类型：true、false
空类型：null、undefined

判断数据类型：typeof

数据类型的转换：
隐式转换：+、-、*、/、==、===、!、&&、||
显式转换：
1. 转换为字符串：String()
2. 转换为数字：Number()

*/

//类型转换
// 1.隐式转换
let a = 10;
let b = "20";
c = a + b;
d = a - b;
console.log(typeof c + c); // string 1020
console.log(typeof d + d); //number -10
//2.显式转换
let e = "123";
console.log(typeof e); //string
let f = Number(e);
console.log(typeof f); //number
