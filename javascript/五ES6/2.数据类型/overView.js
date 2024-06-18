/**
 * 1.字符串类型 string
 * */
let name = '小明'
let lldsweb = 'www.llds.cc'


/**
 * 2.数值类型 number
 * */
//  存储整数、浮点数 es6不区分整数和浮点数
let num1 = 100
let num2 = 60.5
console.log('num1：',typeof num1)
console.log('num2：',typeof num2)


/**
 * 3.布尔类型 boolean
 * */
let var1 = true
let var2 = false


/**
 * 4.对象类型 object
 * */
// 对象类型是一种复合数据类型，可以将多个数据通过键值对的方式存储到一个变量中
let obj1 = {
    name:'小明',
    age: 20,
    address : '北京'
}
console.log('obj1：', obj1)


/**
 * 5.map类型
 * */
// map 是一种特殊的数据结构,用于存储键值对的有序集合
//Map相对于对象提供了更灵活、有序、高效的键值对存储和操作方式,当需要在大量键值对中快速查找或删除特定键值对时, Map比对象更高效
//Map提供了一些便捷的方法来操作键值对, 如: get()、set()、delete()
//Map提供了一些便捷的迭代方法, 如: forEach()、keys()、values()、entries()
let map1 = new Map([
    ['name', '小明'],
    ['age', 20],
    ['address', '北京']
])
console.log('map1：', map1)


/**
 * 6.数组类型 array
 * */
//数组是一种有序集合, 可以包含不同类型的元素，并且数组的长度是可变的
let arr1 = [1, 2, 3, 4, 5]
let arr2 = ['a', 'b', 'c']
let arr3 = ['a', 2, 'c']
console.log('arr1：', arr1)
console.log('arr2：', arr2)
console.log('arr3：', arr3)


/**
 * 6.函数类型 function
 * */
// 函数是一段可重复调用的代码块, 可以接受参数, 并且可以返回一个值或执行某些操作
function add(x,y){
    return x + y
}
a = add(1,4)
console.log('add函数结果：', a)

/**
 * 7.类 class
 * */
// 类是一种蓝图或模板，用于创建具有相同属性和方法的对象
class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    sayHello(){
        console.log('hello, my name is', this.name)
    }
}
const person1 = new Person('小明', 20)
person1.sayHello()













