const forms = document.querySelector('.formulario');
const resultado = document.querySelector('.resultado');

forms.addEventListener ('submit', function (e) {
    e.preventDefault();

    const primeiro = e.target.querySelector('.primeiro');
    const segundo = e.target.querySelector('.segundo');

    const pri = Number (primeiro.value);
    const seg = Number (segundo.value);

    const soma = getSoma(pri, seg);
    resultado.innerHTML = (`Total ${soma}`)
})

function getSoma(x,y) {
    const soma = x + y;
    return soma.toFixed(2);
}


