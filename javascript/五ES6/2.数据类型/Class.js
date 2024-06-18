/**
 * 类 class
 * **/
class Person {
    name
    age
    constructor(name, age){
        this.name = name
        this.age = age
    }
    sayHello(){
        console.log(`姓名:${this.name} 年龄:${this.age}`) //模板字符串
    }
}

let person1 = new Person('小明', 20)
console.log(person1)
console.log(person1.name)
console.log(person1.age)
person1.sayHello()


//2.私有属性：在属性名前加上#，表示私有属性
class Book {
    #name
    #price
    constructor(name, price){
        this.#name = name
        this.#price = price
    }
    // 存取器 getter 获取私有属性
    get name(){
        return this.#name
    }
    // 存取器 setter 设置私有属性
    set name(name){
        this.#name = name
    }
    show(){
        console.log(`书名:${this.#name} 价格:${this.#price}`)
    }
}
let book1 = new Book('JavaScript', 88)
console.log('书名:', book1.name) // 获取私有属性
book1.name = 'Java' // 设置私有属性
console.log('书名:', book1.name) // 获取私有属性

//3.继承extends
class Animal {
    name
    constructor(name){
        this.name = name
    }
    eat(){
        return `${this.name} 休息中...`
    }
}
class Dog extends Animal {
    play
    constructor(name,play){
        super(name) ////调用父类构造函数
        this.play = play
    }
    run(){
        return `${this.name} 跑...`
    }
}
let dog1 = new Dog('小狗','玩球')
console.log('dog1:',dog1)
console.log('dog1:',dog1.eat()) //父类的方法
console.log('dog1:',dog1.name) //父类的属性
console.log('dog1:',dog1.run()) //自己的方法
console.log('dog1:',dog1.play) //自己的属性



















