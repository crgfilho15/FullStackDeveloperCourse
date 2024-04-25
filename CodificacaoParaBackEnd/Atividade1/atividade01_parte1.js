const prompt = require('prompt-sync')({sigint: true});

// Função para limpar o console
function limparConsole() {
    console.clear();
}

// Atividade 1
function atividade1() {
    limparConsole();
    const mensagem = prompt("Digite uma mensagem: ");
    console.log("Mensagem digitada: ", mensagem);
}

// Atividade 2
function atividade2() {
    limparConsole();
    const nome = prompt("Digite seu nome: ");
    console.log("Olá, ", nome, "! Seja bem-vindo(a)!");
}

// Atividade 3
function atividade3() {
    limparConsole();
    console.log("Digite os dados do aluno: ");
    const matricula = prompt("Matrícula: ");
    const nome = prompt("Nome: ");
    const sobrenome = prompt("Sobrenome: ");
    const cpf = prompt("CPF: ");
    const sexo = prompt("Sexo: ");
    const dataNascimento = prompt("Data de Nascimento: ");
    const endereco = prompt("Endereço: ");
    const telefone = prompt("Telefone: ");

    console.log("Dados do aluno: ");
    console.log("Matrícula: ", matricula);
    console.log("Nome completo: ", nome, sobrenome);
    console.log("CPF: ", cpf);
    console.log("Sexo: ", sexo);
    console.log("Data de Nascimento: ", dataNascimento);
    console.log("Endereço: ", endereco);
    console.log("Telefone: ", telefone);
}

// Atividade 4
function atividade4() {
    limparConsole();
    console.log("Digite os dados da disciplina: ");
    const disciplina = prompt("Disciplina: ");
    console.log("Digite os dados do aluno: ");
    const aluno = prompt("Aluno: ");
    const notas = [];
    let somaNotas = 0;

    for (let i = 0; i < 4; i++) {
        notas[i] = parseFloat(prompt(`Nota ${i + 1}:`));
        somaNotas += notas[i];
    }

    const media = somaNotas / 4;
    console.log(`A média do aluno ${aluno} na disciplina ${disciplina} é: ${media.toFixed(2)}`);
}

// Atividade 5
function atividade5() {
    limparConsole();
    const numero = parseInt(prompt("Digite um número para ver sua tabuada: "));

    console.log(`Tabuada do ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

// Atividade 6
function atividade6() {
    limparConsole();
    const nome = prompt("Digite o nome do funcionário: ");
    const salario = parseFloat(prompt("Digite o salário do funcionário: "));

    console.log(`O funcionário ${nome} tem o salário de R$ ${salario.toFixed(2)}.`);
}

// Atividade 7
function atividade7() {
    limparConsole();
    let somatorio = 0;
    for (let i = 0; i < 5; i++) {
        somatorio += parseFloat(prompt(`Digite o número ${i + 1}:`));
    }
    console.log("O somatório dos números é: ", somatorio);
}

// Atividade 8
function atividade8() {
    limparConsole();
    const anos = parseInt(prompt("Digite a idade em anos: "));
    const meses = parseInt(prompt("Digite a idade em meses: "));
    const dias = parseInt(prompt("Digite a idade em dias: "));

    const idadeEmDias = anos * 365 + meses * 30 + dias;
    console.log("A idade expressa em dias é: ", idadeEmDias);
}

// Atividade 9
function atividade9() {
    limparConsole();
    const idadeEmDias = parseInt(prompt("Digite a idade em dias: "));

    const anos = Math.floor(idadeEmDias / 365);
    const diasRestantes = idadeEmDias % 365;
    const meses = Math.floor(diasRestantes / 30);
    const dias = diasRestantes % 30;

    console.log(`A idade expressa em anos, meses e dias é: ${anos} anos, ${meses} meses e ${dias} dias.`);
}

// Atividade 10
function atividade10() {
    limparConsole();
    const horas = parseInt(prompt("Digite o tempo de duração da atividade em horas: "));
    const minutos = parseInt(prompt("Digite o tempo de duração da atividade em minutos: "));
    const segundos = parseInt(prompt("Digite o tempo de duração da atividade em segundos: "));

    const tempoEmSegundos = horas * 3600 + minutos * 60 + segundos;
    console.log("O tempo de duração da atividade em segundos é: ", tempoEmSegundos);
}

// Atividade 11
function atividade11() {
    limparConsole();
    const tempoEmSegundos = parseInt(prompt("Digite o tempo de duração da atividade em segundos: "));

    const horas = Math.floor(tempoEmSegundos / 3600);
    const minutos = Math.floor((tempoEmSegundos % 3600) / 60);
    const segundos = tempoEmSegundos % 60;

    console.log(`O tempo de duração da atividade é: ${horas} horas, ${minutos} minutos e ${segundos} segundos.`);
}

// Atividade 12
function atividade12() {
    limparConsole();
    const preco = parseFloat(prompt("Digite o preço do produto: "));

    const precoComDesconto = preco * 0.85;
    console.log("O preço promocional do produto com 15% de desconto é: ", precoComDesconto.toFixed(2));
}

// Atividade 13
function atividade13() {
    limparConsole();
    const salario = parseFloat(prompt("Digite o salário do funcionário: "));

    const novoSalario = salario * 1.275;
    console.log("O novo salário do funcionário com 27.5% de aumento é: ", novoSalario.toFixed(2));
}

// Atividade 14
function atividade14() {
    limparConsole();
    const valorMatricula = parseFloat(prompt("Digite o valor da matrícula do curso: "));

    const novoValorMatricula = valorMatricula * 0.8;
    console.log("O novo valor da matrícula do curso com 20% de desconto é: ", novoValorMatricula.toFixed(2));
}

// Atividade 15
function atividade15() {
    limparConsole();
    const valorBoleto = parseFloat(prompt("Digite o valor do boleto: "));
    const diasAtraso = parseInt(prompt("Digite a quantidade de dias em atraso: "));

    const taxaAtraso = 1.0125 ** diasAtraso;
    const novoValorBoleto = valorBoleto * taxaAtraso;
    console.log(`O novo valor do boleto com uma taxa de 1.25% ao dia é: R$ ${novoValorBoleto.toFixed(2)}.`);
}

// Menu
function menu() {
    limparConsole();
    console.log("Escolha uma atividade para executar: ");
    console.log("1. Exibir mensagem digitada pelo usuário");
    console.log("2. Mostrar mensagem de boas-vindas");
    console.log("3. Exibir dados de um aluno");
    console.log("4. Calcular média do aluno em uma disciplina");
    console.log("5. Exibir tabuada de um número");
    console.log("6. Mostrar nome e salário de um funcionário");
    console.log("7. Calcular somatório de 5 números");
    console.log("8. Converter idade para dias");
    console.log("9. Converter dias para idade");
    console.log("10. Converter tempo de atividade para segundos");
    console.log("11. Converter segundos para tempo de atividade");
    console.log("12. Calcular preço promocional de um produto");
    console.log("13. Calcular novo salário de um funcionário");
    console.log("14. Calcular novo valor de matrícula com desconto");
    console.log("15. Calcular novo valor de boleto com taxa de atraso");
    console.log("0. Sair do programa");

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

menu();