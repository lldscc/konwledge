// 普通的数组
let arr = [1, 2, 3];
// 批量声明变量 a b c
// 同时将数组单元值 1 2 3 依次赋值给变量 a b c
let [a, b, c] = arr;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
// 1. 变量的数量大于单元值数量时，多余的变量将被赋值为  `undefined`
// 2. 变量的数量小于单元值数量时，可以通过 `...` 获取剩余单元值，但只能置于最末位
