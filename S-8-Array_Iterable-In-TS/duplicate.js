"use strict";
const inp = document.getElementById('val');
const btn = document.getElementById('btn');
const arr = [];
function addElement(number) {
    let n = number;
    if (!arr.includes(n)) {
        arr.push(n);
    }
    console.log(arr);
}
btn.addEventListener('click', () => {
    const numberValue = Number(inp.value);
    addElement(numberValue);
});
