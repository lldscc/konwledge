function Person() {}

//原型对象：prototype
//为构造函数的原型对象添加属性和方法
Person.prototype.name = "小明";
Person.prototype.age = 18;
Person.prototype.sayName = function () {
  console.log(this.name);
};
console.log(Person.prototype);
