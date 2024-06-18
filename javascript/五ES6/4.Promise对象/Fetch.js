/**
 * fetch 是一个原生的JavaScript API 是基于 Promise 的 api, 它可以发送http请求并接收服务器返回的响应数据
 * fetch 返回的是一个 Promise 对象
 * **/
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
