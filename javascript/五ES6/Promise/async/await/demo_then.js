// 模拟请求是否成功
const isA = true;
const isB = false;
const isC = true;
const isD = true;

// 模拟异步请求
function A(){
    return new Promise((resolve, reject) => {
        console.log('执行 【A】 接口的逻辑') //pending 等待状态
        setTimeout(() => {
            if(isA){
                resolve('【A】接口成功') //fulfilled 成功状态
            }else{
                reject('【A】接口失败') // rejected 失败状态
            }
        }, 2000)
    })
}
function B(){
    return new Promise((resolve, reject) => {
        console.log('执行 【B】 接口的逻辑') //pending 等待状态
        setTimeout(() => {
            if(isB){
                resolve('【B】接口成功') //fulfilled 成功状态
            }else{
                reject('【B】接口失败') // rejected 失败状态
            }
        }, 2000)
    })
}
function C(){
    return new Promise((resolve, reject) => {
        console.log('执行 【C】 接口的逻辑') //pending 等待状态
        setTimeout(() => {
            if(isC){
                resolve('【C】接口成功') //fulfilled 成功状态
            }else{
                reject('【C】接口失败') // rejected 失败状态
            }
        }, 2000)
    })
}
function D(){
    return new Promise((resolve, reject) => {
        console.log('执行 【D】 接口的逻辑') //pending 等待状态
        setTimeout(() => {
            if(isD){
                resolve('【D】接口成功') //fulfilled 成功状态
            }else{
                reject('【D】接口失败') // rejected 失败状态
            }
        }, 2000)
    })
}

/**
 * 实现 A逻辑 A成功 B B C C D D
 * */

// 1.调用异步请求
// A().then(res => {
//     console.log(res)
// })
// B().then(res => {
//     console.log(res)
// })
// C().then(res => {
//     console.log(res)
// })
// D().then(res => {
//     console.log(res)
// })
/*执行 【A】 接口的逻辑
执行 【B】 接口的逻辑
执行 【C】 接口的逻辑
执行 【D】 接口的逻辑
【A】接口成功
【B】接口成功
【C】接口成功
【D】接口成功*/

// 2.then
// A().then(res => {
//     console.log(res)
//     return B()
// }).then(res =>{
//     console.log(res)
//     return C()
// }).then(res => {
//     console.log(res)
//     return D()
// }).then(res => {
//     console.log(res)
// })

// async/await
async function asyncFunc(){
    try{
        const a = await A()
        console.log(a)
        const b = await B()
        console.log(b)
        const c = await C()
        console.log(c)
        const d = await D()
        console.log(d)
    }
    catch(err){
        console.log(err)
    }
}
asyncFunc()






















