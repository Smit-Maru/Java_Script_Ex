"use strict";
const ip = document.getElementById('ip');
ip.addEventListener('blur', () => {
    ip.value = ip.value.toUpperCase();
});
