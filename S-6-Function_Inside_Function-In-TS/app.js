"use strict";
function cal() {
    function sum(inputnum) {
        console.log(inputnum);
        const re = inputnum * inputnum;
        return re;
    }
    const n = document.getElementById('num');
    const numberValue = Number(n.value);
    console.log(sum(numberValue));
}
//use of ternory operator
function ternery() {
    const userName = 'smit';
    const ans = userName ? 'name exist' : "name not exist";
    console.log(ans);
}
