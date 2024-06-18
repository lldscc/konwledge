/**
 * Axios 是基于 Promise 的网络请求库, 它可以发送http请求并接收服务器返回的响应数据
 * Axios 不仅可以用于浏览器, 也可以用于 Node.js
 * Axios 返回的是一个 Promise 对象
 * **/
//get请求
axios.get('http://127.0.0.1/get').then(response => {
    console.log("get.data:", response.data)
}).catch(error => {
    console.log("get.error:", error)
}).finally(() => {
    console.log("get.finally")
})

//post请求 post
let data = { //参数
    name: '邓瑞',
    web: 'dengruicode.com',
}

axios.post('http://127.0.0.1/post', data, {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}).then(response => {
    console.log("post.data:", response.data)
}).catch(error => {
    console.log("post.error:", error)
}).finally(() => {
    console.log("post.finally")
})

//post请求 postJson [axios 的默认请求头是 application/json]
axios.post('http://127.0.0.1/postJson', data).then(response => {
    console.log("postJson.data:", response.data)
}).catch(error => {
    console.log("postJson.error:", error)
}).finally(() => {
    console.log("postJson.finally")
})
