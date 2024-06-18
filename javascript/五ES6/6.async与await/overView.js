/**
 * async/await 是异步编程的终极解决方案
 * */
// 1. 同步：代码按照编写顺序逐行执行,后续的代码必须等待当前正在执行的代码完成之后才能执行
//          当遇到耗时的操作(如网络请求等)时,主线程会被阻塞,直到该操作完成
// 2. 异步：代码不按照编写顺序逐行执行,后续的代码不必等待当前正在执行的代码完成之后才能执行
// 3.async: async 函数是 Generator 函数的语法糖, 当一个函数被标记为 async 后, 该函数会返回一个 Promise 对象
// 4.await: await 关键字只能在 async 函数中使用, await 表示等待 Promise 对象的状态发生改变, 然后获取 Promise 对象的结果




    //async/await 使用同步的方式编写异步代码, 避免回调地狱
    //优势 在处理多个异步操作的情况下, 可以使代码更简洁易读
const getData = async () => {
        try {
            //get请求
            const response = await axios.get('http://127.0.0.1/get')
            console.log("async.get.data:", response.data)
            if (response.data.data.web === "dengruicode.com") {

                //get请求2
                const response2 = await axios.get('http://127.0.0.1/article/get/id/1')
                console.log("async.get2.data:", response2.data)
                if (response2.data.data.name === "邓瑞") {

                    //get请求3
                    const response3 = await axios.get('http://127.0.0.1/article/get/search/title/入门')
                    console.log("async.get3.data:", response3.data)
                }
            }

        } catch (error) {
            console.log("async.get.error:", error)
        } finally {
            console.log("async.get.finally")
        }
    }

getData()
