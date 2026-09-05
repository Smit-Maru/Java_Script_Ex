"use strict";
const inp1 = document.getElementById('inp1');
const inp2 = document.getElementById('inp2');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const mulBtn = document.getElementById('mul');
const divBtn = document.getElementById('div');
const p = document.getElementById('p');
addBtn.addEventListener('click', () => {
    const a = Number(inp1.value);
    const b = Number(inp2.value);
    p.textContent = String(a + b);
});
subBtn.addEventListener('click', () => {
    const a = Number(inp1.value);
    const b = Number(inp2.value);
    p.textContent = String(a - b);
});
mulBtn.addEventListener('click', () => {
    const a = Number(inp1.value);
    const b = Number(inp2.value);
    p.textContent = String(a * b);
});
divBtn.addEventListener('click', () => {
    const a = Number(inp1.value);
    const b = Number(inp2.value);
    if (b !== 0) {
        p.textContent = String(a / b);
    }
    else {
        p.textContent = "Cannot divide by zero";
    }
});
