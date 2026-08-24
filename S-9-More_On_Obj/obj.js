const Obj = {
  name:"Smit",
  age:21,
  city:"Rajkot",
  course:"TypeScript"
}

const obj1 = {
  name:Obj.name
}

const obj2 = {
  age:Obj.age
}

const obj3 = {
  city : Obj.city,
  course: Obj.course
}

console.log(obj1 , obj2 , obj3);

const key = "name";

const student = {
  [key]:"Smit"
};

console.log(student);