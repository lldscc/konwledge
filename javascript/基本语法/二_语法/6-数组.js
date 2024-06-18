//数组的定义
let arr1 = [];
let arr2 = [12, 13, 14, 15, 16];

//访问数据
console.log(arr2[1]); //13

//数组做为数据的集合，它的单元值可以是任意数据类型

// 数组属于对象类型
//1.数组的长度属性length
console.log(arr2.length);

//2.数组的方法
//2.1增 arr.push() arr.unshift
// arr2.push(17);  //尾部添加
// arr2.unshift(17); //头部添加
//splice(起始位置，删除个数，添加数组元素

//2.2删
arr2.pop(); //删除尾部一个元素
arr2.shift(); //删除头部一个元素
arr2.splice(1, 1); //
//3.遍历数组
console.log("------------");

for (let n = 0; n < arr2.length; n++) {
  console.log(arr2[n]);
}
