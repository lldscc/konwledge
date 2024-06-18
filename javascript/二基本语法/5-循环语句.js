// 1.while循环
let num1 = 0;
while (num1 < 5) {
  if (num1 === 3) {
    num1++;
    // continue;
    break;
  }

  console.log(num1);
  num1++;
}
// 2.for 循环（重点）
for (let i = 100; i < 105; i++) {
  console.log(i);
}
//3.终止循环
// break 中⽌整个循环，后续的循环停止
// continue 中⽌本次循环，⼀般⽤于排除或者跳过某⼀个选项的时候

//4.无限循环
// while(true) 来构造“⽆限”循环，需要使⽤break退出循环。（常⽤）
// for(;;) 也可以来构造“⽆限”循环，同样需要使⽤break退出循环。
