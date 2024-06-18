//1.构造函数
//通过构造函数创建的对象称为实例对象，实例对象中的属性和方法称为实例成员。
function Person(name, age) {
  // this指向实例对象
  this.name = name;
  this.age = age;
  // 实例对象的方法
  this.sayName = function () {
    console.log(this.name);
  };
}

//2. 实例化对象
const p1 = new Person("小明", 18); //p1 是实例对象
console.log(p1);
console.log(p1.name); // 访问实例属性
p1.sayName(); // 调用实例方法

//3.静态成员： 直接为函数动态添加属性或方法，构造函数的属性和方法被称为静态成员。
// 静态属性
Person.eyes = 2;
Person.arms = 2;
// 静态方法
Person.walk = function () {
  console.log("^_^人都会走路...");
  // this 指向 Person
  console.log(this.eyes);
};
