//属性和方法组成
//1.声明对象
let person = {
  //属性
  name: "zhangsan",
  age: 20,
  //方法：方法名和函数两部分构成
  singing: function () {
    console.log("Singing");
  },
  run: function () {
    console.log("Run");
  },
};

//2.对象的属性方法
//访问对象属性 使用`.` 或 `[]` 获得对象中属性对应的值
console.log(person.age);
console.log(person.name);

//调用对象方法
person.singing();
person.run();

//增加对象属性
person.gender = "men";
console.log(person.gender);
//修改对象属性
person.age = 30;
console.log(person.age);

//增加对象方法
person.move = function () {
  console.log("Move");
};
console.log("----------");
//3.对象的遍历
for (let k in person) {
  console.log(k); //属性名
  console.log(person[k]); //属性值
}

// 4.内置对象
// 1.console.log()
//2.Math
console.log(Math.PI);
