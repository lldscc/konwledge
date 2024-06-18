/**
 * set 集合
 * **/
// 1.Set 中的元素必须唯一

let set = new Set(['apple', 'orange', 'banana'])

// 1.add()方法：向Set对象的末尾添加一个指定的值
let set1 = new Set(['apple', 'orange', 'banana'])
set1.add('apple')
set1.add('pear')
console.log('Set1：', set1)

//2.delete()方法：删除Set对象的指定元素
let set2 = new Set(['apple', 'orange', 'banana'])
set2.delete('apple')
console.log('Set2：', set2)

//3.size() Set集合大小
let set3 = new Set(['apple', 'orange', 'banana'])
console.log('Set3：', set3.size)

//4.遍历Set集合
    // for...of
let set4 = new Set(['apple', 'orange', 'banana'])
for (let item of set4) {
    console.log('Set4：', item)
}
    // forEach()
let set4_1 = new Set(['apple', 'orange', 'banana'])
set4_1.forEach((value) => {
    console.log('Set4_1：', value)
})

//5.转换为数组
    // Array.from()
let set5 = new Set(['apple', 'orange', 'banana'])
let arr5 = Array.from(set5)
console.log('Set5：', arr5)
    //使用扩展运算符
let set5_1 = new Set(['apple', 'orange', 'banana'])
let arr5_1 = [...set5_1]
console.log('Set5_1：', arr5_1)

/**
 * 扩展运算符：是用于展开可迭代对象(如数组、字符串等)
 *
 * */
let arr = [1, 2, 3]
console.log(...arr) // 1 2 3
let web = 'llds.cc'
console.log(...web) // l l d s . c c

//6.clear()方法：移除Set对象中的所有元素
let set6 = new Set(['apple', 'orange', 'banana'])
set6.clear()
console.log('Set6：', set6)

