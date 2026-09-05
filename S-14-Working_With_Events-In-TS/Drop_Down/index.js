"use strict";
const select = document.getElementById('language');
select.addEventListener('change', () => {
    alert(`Selected language is ${select.value}`);
});
