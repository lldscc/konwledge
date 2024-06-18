//函数的声明（定义）
function a1(num1) {
  let num = num1 + 10;
  console.log("hello!!" + num);
  return num; //通过 `return` 这个关键字，将内部执行结果传递到函数外部
}

//函数的调用:函数名+小括号()
a1(10);
console.log(a1(20));

//匿名函数：无法直接使用，赋值再调用
// 声明
let fn = function () {
  console.log("函数表达式");
};
// 调用
fn();

//立即执行函数
(function () {
  console.log("已执行");
})();
