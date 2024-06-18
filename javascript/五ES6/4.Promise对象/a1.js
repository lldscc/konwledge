let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("邮件发送成功")
        reject("邮件发送失败")
    }, 2000)
}).then(result => {
    console.log("result:", result)
}).catch(error => {
    console.log("error:", error)
}).finally(() => {
    console.log("异步执行结束")
})

