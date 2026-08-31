"use strict";
const btn = document.getElementById('btn');
const color = document.getElementById('color');
const divv = document.querySelector('div p:first-child');
btn.addEventListener('click', () => { window.open("https://www.google.com", "_blank"); });
// open in the self tab
// btn.addEventListener('click',()=>{window.open("https://www.google.com","_self")})
color.addEventListener('click', () => {
    divv.style.backgroundColor = 'red';
});
