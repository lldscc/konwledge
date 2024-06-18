/**
 * 数组 array
 * **/
//1.push()方法：向数组的末尾添加一个或多个元素，并返回新的长度
let arr1 = [1, 2, 3, 4, 5]
let arr1_1 = arr1.push(6)
console.log('arr1：', arr1)
console.log('arr1_1：', arr1_1)

//2.unshift()方法：向数组的开头添加一个或多个元素，并返回新的长度
let arr2 = [1, 2, 3, 4, 5]
let arr2_1 = arr2.unshift(0)
console.log('arr2：', arr2)
console.log('arr2_1：', arr2_1)

//3.shift()方法：删除数组的第一个元素，并返回该元素的值
let arr3 = [1, 2, 3, 4, 5]
let arr3_1 = arr3.shift()
console.log('arr3：', arr3)
console.log('arr3_1：', arr3_1)

//4.pop()方法：删除数组的最后一个元素，并返回该元素的值
let arr4 = [1, 2, 3, 4, 5]
let arr4_1 = arr4.pop()
console.log('arr4：', arr4)
console.log('arr4_1：', arr4_1)

// 5.删除元素, 并返回包含被删除元素的数组 splice(要删除元素的索引位置, 要删除的元素数量)
let arr5 = [1, 2, 3, 4, 5]
let arr5_1 = arr5.splice(1, 2)
console.log('arr5：', arr5)
console.log('arr5_1：', arr5_1)

// 6.reverse颠倒数组元素的顺序
let arr6 = [1, 2, 3, 4, 5]
arr6.reverse()
console.log('arr6：', arr6)

// 7.sort()方法：对数组元素进行排序 默认按照字母顺序排序
let arr7 = ['banana', 'apple', 'orange']
arr7.sort()
console.log('arr7：', arr7)
    // 数字排序
let arr7_1 = [5, 20, 13, 1, 4]
arr7_1.sort((a, b) => a - b)
console.log('arr7_1：', arr7_1)

// 8.filter()方法：创建一个新数组, 其包含通过所提供函数实现的测试的所有元素
let arr8 = [1, 2, 3, 4, 5]
let arr8_1 = arr8.filter(item => item > 2)
console.log('arr8：', arr8)
console.log('arr8_1：', arr8_1)

// 9.concat()方法：合并两个或多个数组, 并返回结果
let arr9 = [1, 2, 3]
let arr9_1 = [4, 5, 6]
let arr9_2 = arr9.concat(arr9_1)
console.log('arr9：', arr9)
console.log('arr9_1：', arr9_1)
console.log('arr9_2：', arr9_2)

// 10.遍历数组
    // for循环
let arr10 = [1, 2, 3, 4, 5]
for (let i = 0; i < arr10.length; i++) {
    console.log('arr10：', arr10[i])
}
    // forEach()方法
let arr10_1 = [1, 2, 3, 4, 5]
arr10_1.forEach((value,index) => {
    console.log('arr10_1：', value, index)
})

// 11.转换为Set集合 实现数组去重
let numberArr = [1, 2, 3, 3, 2, 1]
let numberSet = new Set(numberArr)
console.log(numberSet)











