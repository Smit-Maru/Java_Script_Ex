"use strict";
function cal(operation) {
    const num1 = Number(document.getElementById('n1').value);
    const num2 = Number(document.getElementById('n2').value);
    const resultEle = document.getElementById('result');
    switch (operation) {
        case 'add':
            resultEle.innerHTML = String(num1 + num2);
            break;
        case 'sub':
            resultEle.innerHTML = String(num1 - num2);
            break;
        case 'mul':
            resultEle.innerHTML = String(num1 * num2);
            break;
        case 'div':
            if (num2 === 0) {
                alert("This devision is not possible add other number for the denominator.");
            }
            else {
                resultEle.innerHTML = String(num1 / num2);
            }
            break;
    }
}
