"use strict";
const scrollToBtn = document.getElementById("scrollTo");
const scrollByBtn = document.getElementById("scrollBy");
const outer = document.getElementById("outer");
// Scroll to a specific position
scrollToBtn.addEventListener("click", function () {
    outer.scrollTo({
        top: 200,
        left: 500,
        behavior: "smooth"
    });
});
// Scroll relative to current position
scrollByBtn.addEventListener("click", function () {
    outer.scrollBy({
        top: 50,
        left: 100,
        behavior: "smooth"
    });
});
