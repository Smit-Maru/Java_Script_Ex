"use strict";
const userName = "ABC";
if (typeof userName === "string") {
    console.log(userName);
}
function getName(name) {
    const demo = 10;
    const demo2 = 20;
    console.log(demo);
    console.log(demo2);
    return name;
}
const result = getName("Smit");
console.log(result);
