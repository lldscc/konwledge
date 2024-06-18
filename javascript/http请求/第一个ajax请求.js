//1.创建XMLHttpREquest对象
var xmlhttp = new XMLHttpRequest();
//2.设置请求方式和请求地址
xmlhttp.open("GET", "http请求/第一个ajax请求.js");
//3.发送请求
xmlhttp.send();
//4.监听状态变化
xmlhttp.onreadystatechange = function () {
  //5.判断状态是否完成
  if (xmlhttp.readyState == 4) {
    //6.判断状态码
    if (xmlhttp.status == 200) {
      //7.获取响应数据
      console.log(xmlhttp.responseText);
    }
  }
};
