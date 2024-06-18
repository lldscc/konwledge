function foo() {
  try {
    // 查找 DOM 节点
    const p = document.querySelector(".p");
    p.style.color = "red";
  } catch (error) {
    // try 代码段中执行有错误时，会执行 catch 代码段
    // 查看错误信息
    console.log(error.message);
    // 终止代码继续执行
    return;
  } finally {
    alert("执行");
  }
  console.log("如果出现错误，我的语句不会执行");
}
foo();
