const resultado = document.querySelector('.resultado');
const num1 = document.querySelector('.num1');
const num2 = document.querySelector('.num2');

const n1 = Number (num1.value);
const n2 = Number (num2.value);

function somar () {
    const res = n1 + n2;
    resultado.innerHTML = `= ${res}`;
}
function dividir () {
    const res = n1 / n2;
    resultado.innerHTML = `= ${res}`;
}
function subtrair () {
    const res = n1 - n2;
    resultado.innerHTML = `= ${res}`;
}
function multiplicar () {
    const res = n1 * n2;
    resultado.innerHTML = `= ${res}`;
}
