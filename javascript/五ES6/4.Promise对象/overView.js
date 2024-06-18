/**
 * Promise对象
 * */
// Promise 表示承诺在未来的某个时刻可能会完成并返回结果
    // Promise 对象有三种状态 pending(待处理)、fulfilled(已履行)、rejected(被驳回)
    // pending 表示初始状态，既不是成功也不是失败状态 异步执行还未完成
    // fulfilled 表示操作成功完成,会调用 resolve 函数把 Promise 对象的状态改变为 fulfilled, 通过 then 方法来获取异步操作的结果
    // rejected 表示操作失败,会调用 reject 函数把 Promise 对象的状态更改为 rejected, 通过 catch 方法来处理异步操作的错误
let promise1 = new Promise((resolve, reject) => {

})
console.log('promise1:', promise1)

let promise2 = new Promise((resolve, reject) => {
resolve('成功')
})
console.log('promise2:', promise2)
promise2.then(result => {
    console.log("result:", result)
})

let promise3 = new Promise((resolve, reject) => {
    reject('失败')
})
console.log('promise2:', promise3)
promise3.catch(error  => {
    console.log("error :", error )
})
