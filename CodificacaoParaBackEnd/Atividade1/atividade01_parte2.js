const prompt = require('prompt-sync')({sigint: true});

// Função para limpar o console
function limparConsole() {
    console.clear();
}

// Atividade 1
function atividade1() {
    limparConsole();
    console.log("Números ímpares até a 30ª iteração:");
    for (let i = 0; i <= 50; i++) {
        if (i === 30) break; // Saída do laço na 30ª iteração
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

// Atividade 2
function atividade2() {
    limparConsole();
    console.log("Números pares até a 30ª iteração:");
    for (let i = 0; i <= 50; i++) {
        if (i === 30) continue; // Pula a 30ª iteração
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

// Atividade 3
function atividade3() {
    limparConsole();
    const numero = parseInt(prompt("Digite um número: "));
    if (numero % 2 === 0) {
        console.log(`${numero} é par.`);
    } else {
        console.log(`${numero} é ímpar.`);
    }
}

// Atividade 4
function atividade4() {
    limparConsole();
    const numero = parseInt(prompt("Digite um número para calcular o fatorial: "));
    let resultado = 1;
    let expressao = `${numero}! = `;
    for (let i = numero; i >= 1; i--) {
        resultado *= i;
        expressao += i === 1 ? i : i + " X ";
    }
    expressao += ` = ${resultado}`;
    console.log(expressao);
}

// Atividade 5
function atividade5() {
    limparConsole();
    let soma = 0;
    for (let i = 1; i <= 100; i += 2) {
        if (i % 3 === 0) {
            soma += i;
        }
    }
    console.log("A soma dos números ímpares múltiplos de três até 100 é:", soma);
}

// Atividade 6
function atividade6() {
    limparConsole();
    const a = parseInt(prompt("Digite o valor de A: "));
    const b = parseInt(prompt("Digite o valor de B: "));
    const c = parseInt(prompt("Digite o valor de C: "));
    const numeros = [a, b, c];
    console.log("Números em ordem crescente:", numeros.sort((a, b) => a - b));
    console.log("Números em ordem decrescente:", numeros.sort((a, b) => b - a));
}

// Atividade 7
function atividade7() {
    limparConsole();
    const a = parseInt(prompt("Digite o valor de A: "));
    const b = parseInt(prompt("Digite o valor de B: "));
    let c;
    if (a === b) {
        c = a + b;
        console.log(`A soma de A e B é: ${c}`);
    } else {
        c = a * b;
        console.log(`O produto de A e B é: ${c}`);
    }
}

// Atividade 8
function atividade8() {
    limparConsole();
    const nome = prompt("Digite o nome do aluno: ");
    const matricula = prompt("Digite a matrícula do aluno: ");
    const disciplina = prompt("Digite a disciplina do aluno: ");
    const nota = parseFloat(prompt("Digite a nota do aluno: "));
    if (nota >= 60) {
        console.log("Aprovado");
    } else if (nota >= 50) {
        console.log("Em recuperação");
    } else {
        console.log("Reprovado");
    }
}

// Atividade 9
function atividade9() {
    limparConsole();
    let somaIdades = 0;
    let maisDeVinte = 0;
    let menosDeDez = 0;
    let maiorIdade = Number.MIN_VALUE;
    let menorIdade = Number.MAX_VALUE;

    for (let i = 0; i < 10; i++) {
        const idade = parseInt(prompt(`Digite a idade da pessoa ${i + 1}: `));
        somaIdades += idade;
        if (idade > 20) {
            maisDeVinte++;
        }
        if (idade < 10) {
            menosDeDez++;
        }
        if (idade > maiorIdade) {
            maiorIdade = idade;
        }
        if (idade < menorIdade) {
            menorIdade = idade;
        }
    }

    const mediaIdades = somaIdades / 10;
    console.log("Média de idade do grupo:", mediaIdades);
    console.log("Pessoas com mais de 20 anos:", maisDeVinte);
    console.log("Pessoas com menos de 10 anos:", menosDeDez);
    console.log("Maior idade lida:", maiorIdade);
    console.log("Menor idade lida:", menorIdade);
}

// Atividade 10
function atividade10() {
    limparConsole();
    const largura = parseFloat(prompt("Digite a largura do terreno em metros: "));
    const comprimento = parseFloat(prompt("Digite o comprimento do terreno em metros: "));
    const area = largura * comprimento;
    console.log("Área do terreno:", area, "m²");
    if (area < 100) {
        console.log("TERRENO POPULAR");
    } else if (area <= 500) {
        console.log("TERRENO MASTER");
    } else {
        console.log("TERRENO VIP");
    }
}

// Atividade 11
function atividade11() {
    limparConsole();
    const preco = parseFloat(prompt("Digite o preço do produto: "));
    console.log("   Condições de pagamento:");
    console.log("   1 - À vista em dinheiro ou cheque, recebe 10% de desconto");
    console.log("   2 - À vista no cartão de crédito, recebe 15% de desconto");
    console.log("   3 - Em duas vezes, preço normal de etiqueta sem juros");
    console.log("   4 - Em duas vezes, preço normal de etiqueta mais juros de 10%");
    const opcao = parseInt(prompt("Escolha a condição de pagamento (1, 2, 3 ou 4): "));
    let precoFinal;
    switch (opcao) {
        case 1:
            precoFinal = preco * 0.9;
            break;
        case 2:
            precoFinal = preco * 0.85;
            break;
        case 3:
            precoFinal = preco;
            break;
        case 4:
            precoFinal = preco * 1.1;
            break;
        default:
            console.log("Opção inválida.");
            return;
    }
    console.log("Preço final:", precoFinal);
}

// Atividade 12
function atividade12() {
    limparConsole();
    const altura = parseFloat(prompt("Digite a altura da pessoa em metros: "));
    const sexo = prompt("Digite o sexo da pessoa (M para masculino, F para feminino): ");
    let pesoIdeal;
    if (sexo.toUpperCase() === "M") {
        pesoIdeal = (72.7 * altura) - 58;
    } else if (sexo.toUpperCase() === "F") {
        pesoIdeal = (62.1 * altura) - 44.7;
    } else {
        console.log("Sexo inválido.");
        return;
    }
    console.log("Peso ideal:", pesoIdeal.toFixed(2), "kg");
}

// Atividade 13
function atividade13() {
    limparConsole();
    const num1 = parseFloat(prompt("Digite o primeiro número: "));
    const num2 = parseFloat(prompt("Digite o segundo número: "));
    const operacao = prompt("Digite a operação desejada (+, -, *, /): ");
    let resultado;
    switch (operacao) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num1 / num2;
            break;
        default:
            console.log("Operação inválida.");
            return;
    }
    console.log("Resultado:", resultado);
}

// Atividade 14
function atividade14() {
    limparConsole();
    const peso = parseFloat(prompt("Digite o peso da pessoa em kg: "));
    const altura = parseFloat(prompt("Digite a altura da pessoa em metros: "));
    const imc = peso / (altura * altura);
    console.log("IMC:", imc.toFixed(2));
    if (imc < 18.5) {
        console.log("Abaixo do Peso");
    } else if (imc < 25) {
        console.log("Peso Ideal");
    } else if (imc < 30) {
        console.log("Excesso de Peso");
    } else {
        console.log("Obesidade");
    }
}

// Atividade 15
function atividade15() {
    limparConsole();
    const valorSaque = prompt("Digite o valor que deseja sacar: ");
    if (isNaN(valorSaque) || valorSaque <= 0 || valorSaque % 1 !== 0) {
        console.log("Valor de saque inválido.");
        return;
    }
    const notasDisponiveis = [100, 50, 20, 10, 5, 2, 1];
    let valorRestante = valorSaque;
    let distribuicaoNotas = {};
    for (const nota of notasDisponiveis) {
        const quantidade = Math.floor(valorRestante / nota);
        if (quantidade > 0) {
            distribuicaoNotas[nota] = quantidade;
            valorRestante -= quantidade * nota;
        }
    }
    console.log("Distribuição das notas:");
    for (const nota in distribuicaoNotas) {
        console.log(`${distribuicaoNotas[nota]} nota(s) de R$${nota},00`);
    }
}

// Menu
function menu() {
    limparConsole();
    console.log("Escolha uma atividade para executar:");
    console.log("1. Números ímpares até 50 (saída na 30ª iteração)");
    console.log("2. Números pares até 50 (pular na 30ª iteração)");
    console.log("3. Verificar se um número é par ou ímpar");
    console.log("4. Cálculo do fatorial de um número");
    console.log("5. Soma de números ímpares múltiplos de três até 100");
    console.log("6. Ordenar números em ordem crescente e decrescente");
    console.log("7. Soma ou multiplicação de dois valores");
    console.log("8. Verificar situação de aprovação de um aluno");
    console.log("9. Análise de idade de um grupo de pessoas");
    console.log("10. Calcular área de terreno e classificar");
    console.log("11. Calcular preço de um produto com diferentes condições de pagamento");
    console.log("12. Calcular peso ideal baseado na altura e sexo");
    console.log("13. Calculadora com operações básicas");
    console.log("14. Calcular IMC e classificar");
    console.log("15. Distribuição de notas em um saque no caixa eletrônico");
    console.log("0. Sair");

    const opcao = parseInt(prompt("Escolha uma atividade para executar: "));

    switch (opcao) {
        case 0:
            console.log("Programa encerrado.");
            break;
        case 1:
            atividade1();
            break;
        case 2:
            atividade2();
            break;
        case 3:
            atividade3();
            break;
        case 4:
            atividade4();
            break;
        case 5:
            atividade5();
            break;
        case 6:
            atividade6();
            break;
        case 7:
            atividade7();
            break;
        case 8:
            atividade8();
            break;
        case 9:
            atividade9();
            break;
        case 10:
            atividade10();
            break;
        case 11:
            atividade11();
            break;
        case 12:
            atividade12();
            break;
        case 13:
            atividade13();
            break;
        case 14:
            atividade14();
            break;
        case 15:
            atividade15();
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
            break;
    }

    if (opcao !== 0) {
        console.log("\nPressione Enter para voltar ao menu...");
        prompt();
        menu();
    }
}

// Iniciar o programa
menu();