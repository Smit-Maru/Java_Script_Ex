function Student(name,age,language){
  this.name = name;
  this.age = age;
  this.language = language;
}

// const stu1 = new Student("Smit",21,"English")
// const stu2 = new Student("Smit",21,"English")
// const stu3 = new Student("Smit",21,"English")
// const stu4 = new Student("Smit",21,"English")
// const stu5 = new Student("Smit",21,"English")

// console.log(stu1)
// console.log(stu2);
// console.log(stu3);
// console.log(stu4);
// console.log(stu5);

// console.log(stu1.language);

Student.prototype.sayHello = function(){
  console.log("Hello");
}

const stu1 = new Student("Smit",21,"English")
console.log(stu1);
stu1.sayHello();