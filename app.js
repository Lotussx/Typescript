"use strict";
let button = document.getElementById("button");
let input01 = document.getElementById("input01");
let input02 = document.getElementById("input02");
function somaNum(num1, num2) {
    return num1 + num2;
}
if (button) {
    button.addEventListener('click', () => {
        if (input01 && input02) {
            console.log(somaNum(Number(input01.value), Number(input02.value)));
        }
    });
}
console.log("Teste");
