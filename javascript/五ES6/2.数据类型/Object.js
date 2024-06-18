/**
 * 对象 object
 * **/
//1.添加新的属性
let obj1 = {
    name: '小明',
    age: 20,
}
obj1.address = '北京'
console.log('Obj1：', obj1)

//2.删除属性
let obj2 = {
    name: '小明',
    age: 20,
}
delete obj2.age
console.log('Obj2：', obj2)

// 3.是否包含某属性 in 返回布尔值
let obj3 = {
    name: '小明',
    age: 20,
}
let has = 'name' in  obj3
console.log('Obj3：', has)

//4.获取对象的属性数量
let obj4 = {
    name: '小明',
    age: 20,
}
console.log('对象属性名的数组:', Object.keys(obj4))
console.log('对象长度：', Object.keys(obj4).length)

// 5.entries() 转换成数组
let obj5 = {
    name: '小明',
    age: 20,
}
let arr5 = Object.entries(obj5)
console.log('Obj5:',arr5)

// 6.遍历对象
    //for in
let obj6 = {
    name: '小明',
    age: 20,
}
for (let key in obj6){
    console.log('key:', key)
    console.log('value:', obj6[key])
}
    //forEach()
Object.entries(obj6).forEach(([key, value]) => {
    console.log("forEach", key, value)
})
/**
 * for...of 用于遍历可迭代对象[如数组、Set、Map、字符串等]
 * for...in 用于遍历对象的可枚举属性
 * **/

// 7.清空对象
let obj7 = {
    name: '小明',
    age: 20,
}
obj7 = {}
console.log('Obj7:', obj7)

