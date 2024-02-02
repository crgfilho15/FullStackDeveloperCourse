let prompt = require("prompt-sync")();

let continuar = true;
let x;
let y;
let opcoes = [1,2,3,4,5,6]; // Número de opções disponíveis na calculadora (é possível automatizar algumas funções utilizando o opcoes.length)

function Calculadora(operador) {
    console. clear();
    
    if(operador > 0 && operador < opcoes.length) {
        x = parseFloat(prompt("Digite o valor de x: "));
        y = parseFloat(prompt("Digite o valor de y: "));
    }

    switch (operador) {
        case 1:
            return x + y;
            break;
        case 2:
            return x - y;
            break;
        case 3:
            return x * y;
            break;
        case 4:
            return y == 0 ? "Divisão por Zero (Inválido)!" : x / y; // Tratativa para erro causado por divisão por zero
            break;
        case 5:
            return Math.pow(x, y); // Função para calcular potência (x^y)
            break;
        case 6:
            continuar = false;
            break;
        default:
            return "Operador Inválido!"; // Tratativa para operador inválido (Operadores válidos: * + - /)
            break;
    }
}

while(continuar) {
    console.log("Calculadora");
    console.log("1 - Soma (x+y)");
    console.log("2 - Subtração (x-y)");
    console.log("3 - Multiplicação (x*y)");
    console.log("4 - Divisão (x/y)");
    console.log("5 - Potenciação (x^y)");
    console.log("6 - Sair");
    operador = parseInt(prompt("Digite o operador desejado: "));
    operador != opcoes.length ? console.log("Resultado: " + Calculadora(operador)) : Calculadora(operador);
}
