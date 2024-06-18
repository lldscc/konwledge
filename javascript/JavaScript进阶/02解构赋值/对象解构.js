// 普通对象
const user = {
  name: "小明",
  age: 18,
};
// 批量声明变量 name age
// 同时将数组单元值 小明  18 依次赋值给变量 name  age
const { name, age } = user;

console.log(name); // 小明
console.log(age); // 18
// 对象属性的值将被赋值给与属性名相同的变量
// 对象中找不到与变量名一致的属性时变量值为 `undefined`

// 传递给函数的参数也可以使用对象解构
function app({ name, age }) {
  console.log(name);
  console.log(age);
}
