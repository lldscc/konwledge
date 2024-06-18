// 1. if分⽀语句（重点）
if (true) {
  console.log("执行！！");
}

if (false) {
  console.log("不执行！！");
}

let a = 2;
if (a == 1) {
  console.log("a等于1");
} else {
  console.log("a不等于1");
}

let b = 3;
if (b == 1) {
  console.log("b等于1");
} else if (b == 2) {
  console.log("b等于2");
} else {
  console.log("b不等于1或2");
}

// 2. 三元运算符  (条件) ? 结果1 : 结果2
let num1 = 20;
let num2 = 30;
num1 > num2 ? console.log("num1大") : console.log("num2大");

// 3. switch语句
let num = 3;
switch (num) {
  case 1:
    console.log("您选择的是1");
    break; // 退出switch
  case 2:
    console.log("您选择的是2");
    break; // 退出switch
  case 3:
    console.log("您选择的是3");
    break; // 退出switch
  default:
    console.log("没有符合条件的");
}
