"use strict";
const row = 10;
const col = 10;
for (let i = 0; i < row; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
        str += "* ";
    }
    console.log(str);
}
