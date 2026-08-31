const Obj = {
  name:"Smit",
  age:21,
  city:"Rajkot",
  course:"TypeScript"
}

const obj1 : object = {
  Name : Obj.name
}

const obj2 : object = {
  age : Obj.age
}

const obj3 : object = {
  city : Obj.city,
  course : Obj.course
}

console.log(obj1,obj2,obj3);

const key = "name";

const student = {
  [key]:"Smit"
}

console.log(student);