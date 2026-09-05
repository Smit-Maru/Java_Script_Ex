"use strict";
const input = document.getElementById("text");
input.addEventListener("keydown", function () {
    input.style.backgroundColor = "red";
});
input.addEventListener("keyup", function () {
    input.style.backgroundColor = "green";
});
