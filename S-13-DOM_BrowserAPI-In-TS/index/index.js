"use strict";
const btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    const p = document.createElement('p');
    p.textContent = "Hello";
    document.body.append(p);
});
