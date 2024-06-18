/**
 * Map 集合
 * **/
//每个键都是唯一的, 重复的键会覆盖
let person1 = new Map() //创建一个空的Map集合
let person2 = new Map([
        ["name", "小明"],
        ["gender", "男"],
        ["web", "llds.cc"]
    ])
//1.set()方法：向Map对象添加或更新一个指定的键值对(重复的键会覆盖)
let map1 = new Map([
    ['name', '小明'],
    ['age', 20]
])
map1.set('age', '21')
map1.set('address', '北京')
console.log('Map1：', map1)

//2.delete()方法：删除Map对象中指定的元素
let map2 = new Map([
    ['name', '小明'],
    ['age', 20]
])
map2.delete('age')
console.log('Map2：', map2)

//3.has()方法：返回一个布尔值，表示Map实例是否包含指定键
let map3 = new Map([
    ['name', '小明'],
    ['age', 20]
])
console.log('Map3：', map3.has('age'))

// 4.size() 方法：返回Map对象的键值对的数量
let map4 = new Map([
    ['name', '小明'],
    ['age', 20]
])
console.log('Map4：', map4.size)

// 5.clear() 方法：移除Map对象的所有键值对
let map5 = new Map([
    ['name', '小明'],
    ['age', 20]
])
map5.clear()
console.log('Map5：', map5)

//6.遍历Map集合
    // for...of
let map6 = new Map([
    ['name', '小明'],
    ['age', 20]
])
for (let [key, value] of map6) {
    console.log("for...of", key, value)
}
    // forEach()
map6.forEach((value, key) => {
    console.log("forEach", key, value)
})

// 7. Array.from() 转换为数组
let map7 = new Map([
    ['name', '小明'],
    ['age', 20]
])
let arr = Array.from(map7)
console.log('Array.from()', arr)










