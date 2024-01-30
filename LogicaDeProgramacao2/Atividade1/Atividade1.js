let prompt = require('prompt-sync')({ sigint: true });

console.log("Escolha uma opção:");
console.log("1. Variáveis e tipos de dados");
console.log("2. Operadores");
console.log("3. Condições");
console.log("4. Média Aritmética");
console.log("5. Aumento de Salário");
console.log("6. Soma ou Multiplicação");
console.log("7. Pagamento Parcelado");
console.log("8. Média e Aprovação");
console.log("9. Operações com Código de Seleção");
console.log("10. Verificar Maior Número");
console.log("11. Verificar Sexo");
console.log("12. Verificar Aprovação com Distinção");

let opcao = parseInt(prompt("Digite o número da opção desejada: "));

switch (opcao) {
    case 1:
        // Variáveis e tipos de dados
        let nome = prompt("Digite seu nome: ");
        let idade = parseInt(prompt("Digite sua idade: "));
        console.log(`Olá, meu nome é ${nome} e eu tenho ${idade} anos.`);
        break;
    case 2:
        // Operadores
        let numero1 = parseFloat(prompt("Digite o primeiro número: "));
        let numero2 = parseFloat(prompt("Digite o segundo número: "));
        let soma = numero1 + numero2;
        let subtracao = numero1 - numero2;
        let multiplicacao = numero1 * numero2;
        let divisao = numero1 / numero2;
        console.log(`Soma: ${soma}`);
        console.log(`Subtração: ${subtracao}`);
        console.log(`Multiplicação: ${multiplicacao}`);
        console.log(`Divisão: ${divisao}`);
        break;
    case 3:
        // Condições
        let idadeUsuario = parseInt(prompt("Qual é a sua idade?"));
        if (idadeUsuario >= 18) {
            console.log("Você é maior de idade.");
        } else {
            console.log("Você é menor de idade.");
        }
        break;
    case 4:
        // Média Aritmética
        let notaA = parseFloat(prompt("Digite a primeira nota: "));
        let notaB = parseFloat(prompt("Digite a segunda nota: "));
        let notaC = parseFloat(prompt("Digite a terceira nota: "));
        let mediaNotas = (notaA + notaB + notaC) / 3;
        console.log(`A média das notas é: ${mediaNotas}`);
        break;
    case 5:
        // Aumento de Salário
        let nomeFuncionario = prompt("Digite o nome do funcionário: ");
        let salarioAtual = parseFloat(prompt("Digite o salário atual do funcionário: "));
        let novoSalario = salarioAtual * 1.1; // Aumento de 10%
        console.log(`O novo salário de ${nomeFuncionario} é: ${novoSalario}`);
        break;
    case 6:
        // Soma ou Multiplicação
        let valorA = parseInt(prompt("Digite o valor de A: "));
        let valorB = parseInt(prompt("Digite o valor de B: "));
        let valorC;
        if (valorA === valorB) {
            valorC = valorA + valorB;
        } else {
            valorC = valorA * valorB;
        }
        console.log(`O resultado da operação é: ${valorC}`);
        break;
    case 7:
        // Pagamento Parcelado
        let precoAVista = parseFloat(prompt("Digite o preço à vista do produto: "));
        let numeroParcelas = parseInt(prompt("Digite o número de parcelas (3 ou 5): "));
        let acrescimoParcelas = 0;
        if (numeroParcelas === 3) {
            acrescimoParcelas = 0.1; // 10%
        } else if (numeroParcelas === 5) {
            acrescimoParcelas = 0.2; // 20%
        }
        let precoTotalParcelado = precoAVista * (1 + acrescimoParcelas);
        let valorPrestacao = precoTotalParcelado / numeroParcelas;
        console.log(`Preço Total a Pagar: ${precoTotalParcelado}`);
        console.log(`Valor da Prestação Mensal: ${valorPrestacao}`);
        break;
    case 8:
        // Média e Aprovação
        let nomeAluno = prompt("Digite o nome do aluno: ");
        let nota1Aluno = parseFloat(prompt("Digite a primeira nota: "));
        let nota2Aluno = parseFloat(prompt("Digite a segunda nota: "));
        let nota3Aluno = parseFloat(prompt("Digite a terceira nota: "));
        let mediaAluno = (nota1Aluno + nota2Aluno + nota3Aluno) / 3;
        console.log(`Nome do Aluno: ${nomeAluno}`);
        console.log(`Média do Aluno: ${mediaAluno}`);
        if (mediaAluno >= 8) {
            console.log("Aluno aprovado!");
        } else {
            console.log("Aluno reprovado.");
        }
        break;
    case 9:
        // Operações com Código de Seleção
        let numX = parseFloat(prompt("Digite o primeiro número: "));
        let numY = parseFloat(prompt("Digite o segundo número: "));
        let codigoOperacao = parseInt(prompt("Digite o código de seleção (1, 2 ou 3): "));
        let resultadoOperacaoSelecao;
        switch (codigoOperacao) {
            case 1:
                resultadoOperacaoSelecao = numX + numY;
                break;
            case 2:
                resultadoOperacaoSelecao = numX * numY;
                break;
            case 3:
                resultadoOperacaoSelecao = numX / numY;
                break;
            default:
                console.log("Código de seleção inválido.");
                break;
        }
        if (codigoOperacao >= 1 && codigoOperacao <= 3) {
            console.log(`O resultado da operação é: ${resultadoOperacaoSelecao}`);
        }
        break;
    case 10:
        // Verificar Maior Número
        let numeroA = parseFloat(prompt("Digite o primeiro número: "));
        let numeroB = parseFloat(prompt("Digite o segundo número: "));
        if (numeroA > numeroB) {
            console.log(`O maior número é: ${numeroA}`);
        } else if (numeroB > numeroA) {
            console.log(`O maior número é: ${numeroB}`);
        } else {
            console.log("Os números são iguais.");
        }
        break;
    case 11:
        // Verificar Sexo
        let genero = prompt("Digite o sexo (F para feminino, M para masculino): ");
        if (genero === 'F' || genero === 'f') {
            console.log("Feminino");
        } else if (genero === 'M' || genero === 'm') {
            console.log("Masculino");
        } else {
            console.log("Sexo inválido.");
        }
        break;
    case 12:
        // Verificar Aprovação com Distinção
        let notaAprovacao = parseFloat(prompt("Digite a nota de aprovação: "));
        if (notaAprovacao === 10) {
            console.log("Aprovado com Distinção");
        } else {
            console.log("Nota de aprovação não é 10.");
        }
        break;
    default:
        console.log("Opção inválida.");
}
