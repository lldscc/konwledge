/**
 * 解构
 * */
//可以从数组或对象中提取值并赋给变量

//1.数组解构
let arr1 = [1, 2, 3]
let [a, b, c] = arr1
console.log(a, b, c)
let [, , d] = arr1
console.log(d)

//2.扩展运算符
let arr2 = [1, 2, 3]
let [e, ...f] = arr2
console.log(e, f)
    //交换变量
let x3 = 10
let y3 = 20; //不加分号会报错
[x3, y3] = [y3, x3]
console.log("x3:", x3, "y3:", y3)





//3.对象解构
let person = {
    name: '小明',
    gender: '男',
}
let { name } = person
console.log("name:", name)
    //重命名
let { name: name2 } = person
console.log("name2:", name2)
    //默认值
let { age = 20 } = person
console.log("age:", age)
