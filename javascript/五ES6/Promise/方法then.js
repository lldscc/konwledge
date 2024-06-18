// Promise的then方法的两个参数分别是resolve和reject
let p = new Promise((resolve, reject) => {
    var num = Math.ceil(Math.random() * 10); //生成1-10的随机数
    if (num <= 5) {
        resolve(num);
    } else {
        reject('数字太大了' + num);
    }
})

p.then((data) => {
    console.log('resolve:' + data); // 处理resolve回调
}, (err) => {
    console.log('reject:' + err); // 处理reject回调
})
