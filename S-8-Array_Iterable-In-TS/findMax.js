"use strict";
function findMax(...numbers) {
    var ans = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > ans) {
            ans = numbers[i];
        }
    }
    console.log(ans);
}
findMax(10, 20, 40, 60, 80, 51, 62, 51);
