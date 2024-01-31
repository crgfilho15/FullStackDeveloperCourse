let prompt = require('prompt-sync')({ sigint: true });

// Solicitação do número para a tabuada
let numero = parseFloat(prompt("Digite o número para a tabuada: "));

// Loop for para calcular a tabuada de 1 a 10
for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}
