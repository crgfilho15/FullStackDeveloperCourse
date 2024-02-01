let prompt = require('prompt-sync')({ sigint: true });

function calcPct(x, y) {
    return (y / x) * 100;
}

let x = 40;
let y = 10;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`);

////////////////////////////////////////////

function calcularImovel(metragem, quartos) {
    let m2 = 3000;
    let preco;

    switch (quartos) {
        case 1:
            preco = metragem * m2;
            break;
        case 2:
            preco = metragem * m2 * 1.2;
            break;
        case 3:
            preco = metragem * m2 * 1.5;
            break;
        default:
            console.log("Número de quartos inválido.");
            return 0;
    }

    return preco;
}

let metragem = 123;
let quartos = 3;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);

////////////////////////////////////////////

function calcularQuadrado(numero) {
    return numero * numero;
}

let numeroDigitado = parseFloat(prompt("Digite um número: "));
let quadrado = calcularQuadrado(numeroDigitado);
console.log(`O quadrado de ${numeroDigitado} é ${quadrado}`);
