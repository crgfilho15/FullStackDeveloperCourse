let prompt = require('prompt-sync')({ sigint: true });

function sistemaHotel() {
    let nomeHospede = prompt("Digite o nome do hóspede: ");
    console.log(`Bem-vindo(a), ${nomeHospede}!`);

    console.log("Opções disponíveis:");
    console.log("1. Fazer Check-in");
    console.log("2. Chamar serviço de quarto");
    console.log("3. Fazer pedido");
    console.log("4. Fazer Check-out");

    let opcao = parseInt(prompt("Escolha uma opção: "));

    switch (opcao) {
        case 1:
            console.log("Realizando Check-in...");
            break;
        case 2:
            console.log("Chamando serviço de quarto...");
            break;
        case 3:
            console.log("Fazendo pedido...");
            break;
        case 4:
            console.log("Realizando Check-out...");
            break;
        default:
            console.log("Opção inválida.");
    }
}

function calculadoraOperacoes() {
    let operando1 = parseFloat(prompt("Digite o primeiro operando: "));
    let operando2 = parseFloat(prompt("Digite o segundo operando: "));

    console.log("Escolha uma operação:");
    console.log("1. Soma");
    console.log("2. Subtração");
    console.log("3. Multiplicação");
    console.log("4. Divisão");

    let operacao = parseInt(prompt("Escolha uma operação (1 a 4): "));

    switch (operacao) {
        case 1:
            console.log(`Resultado: ${operando1 + operando2}`);
            break;
        case 2:
            console.log(`Resultado: ${operando1 - operando2}`);
            break;
        case 3:
            console.log(`Resultado: ${operando1 * operando2}`);
            break;
        case 4:
            if (operando2 !== 0) {
                console.log(`Resultado: ${operando1 / operando2}`);
            } else {
                console.log("Divisão por zero não é permitida.");
            }
            break;
        default:
            console.log("Opção inválida.");
    }
}

function calculoPesoIdeal() {
    let peso = parseFloat(prompt("Digite o peso do usuário: "));
    let sexo = prompt("Digite o sexo (M para masculino, F para feminino): ");

    let pesoIdeal;

    switch (sexo.toUpperCase()) {
        case 'M':
            pesoIdeal = (peso - 100) * 0.9;
            console.log(`Peso ideal para um homem: ${pesoIdeal.toFixed(2)} kg`);
            break;
        case 'F':
            pesoIdeal = (peso - 100) * 0.85;
            console.log(`Peso ideal para uma mulher: ${pesoIdeal.toFixed(2)} kg`);
            break;
        default:
            console.log("Opção inválida.");
    }
}

function calculoValorTotalDesconto() {
    let valorCompra = parseFloat(prompt("Digite o valor total da compra: "));
    let codigoCliente = parseInt(prompt("Digite o código do cliente (1 para comum, 2 para funcionário, 3 para vip): "));

    let desconto;

    switch (codigoCliente) {
        case 1:
            desconto = 0;
            break;
        case 2:
            desconto = 0.1; // 10% de desconto para funcionários
            break;
        case 3:
            desconto = 0.05; // 5% de desconto para vips
            break;
        default:
            console.log("Código de cliente inválido.");
    }

    let valorTotal = valorCompra * (1 - desconto);
    console.log(`Valor total a ser pago: R$${valorTotal.toFixed(2)}`);
}

function impressaoMesSwitch() {
    let numeroMes = parseInt(prompt("Digite o número do mês (1 a 12): "));

    switch (numeroMes) {
        case 1:
            console.log("Janeiro");
            break;
        case 2:
            console.log("Fevereiro");
            break;
        case 3:
            console.log("Março");
            break;
        case 4:
            console.log("Abril");
            break;
        case 5:
            console.log("Maio");
            break;
        case 6:
            console.log("Junho");
            break;
        case 7:
            console.log("Julho");
            break;
        case 8:
            console.log("Agosto");
            break;
        case 9:
            console.log("Setembro");
            break;
        case 10:
            console.log("Outubro");
            break;
        case 11:
            console.log("Novembro");
            break;
        case 12:
            console.log("Dezembro");
            break;
        default:
            console.log("Número de mês inválido.");
    }
}

function calculoTaxaNatalidadeMortalidade() {
    let numeroCriancas = parseInt(prompt("Digite o número de crianças nascidas: "));
    let numeroObitos = parseInt(prompt("Digite o número de óbitos: "));
    let numeroHabitantes = parseInt(prompt("Digite o número de habitantes: "));

    let taxaNatalidade = (numeroCriancas * 1000) / numeroHabitantes;
    let taxaMortalidade = (numeroObitos * 1000) / numeroHabitantes;

    console.log(`Taxa de Natalidade: ${taxaNatalidade.toFixed(2)} por mil habitantes`);
    console.log(`Taxa de Mortalidade: ${taxaMortalidade.toFixed(2)} por mil habitantes`);
}

function calculoValorFinalDescontoAVista() {
    let valorProduto = parseFloat(prompt("Digite o valor do produto: "));
    let formaPagamento = parseInt(prompt("Digite a forma de pagamento (1 para à vista, 2 para à prazo): "));

    let valorFinal;

    switch (formaPagamento) {
        case 1:
            valorFinal = valorProduto * 0.9; // 10% de desconto à vista
            console.log(`Valor com desconto à vista: R$${valorFinal.toFixed(2)}`);
            break;
        case 2:
            valorFinal = valorProduto;
            console.log(`Valor sem desconto: R$${valorFinal.toFixed(2)}`);
            break;
        default:
            console.log("Opção de pagamento inválida.");
    }
}

while (true) {
    console.log("\nEscolha um programa:");
    console.log("1. Sistema de Hotel");
    console.log("2. Calculadora de Operações Matemáticas");
    console.log("3. Cálculo do Peso Ideal");
    console.log("4. Cálculo do Valor Total com Desconto");
    console.log("5. Impressão do Mês com Switch");
    console.log("6. Cálculo de Taxa de Natalidade e Mortalidade");
    console.log("7. Cálculo do Valor Final com Desconto à Vista");
    console.log("0. Sair");

    let escolha = parseInt(prompt("Escolha o programa (0 a 7): "));

    switch (escolha) {
        case 1:
            sistemaHotel();
            break;
        case 2:
            calculadoraOperacoes();
            break;
        case 3:
            calculoPesoIdeal();
            break;
        case 4:
            calculoValorTotalDesconto();
            break;
        case 5:
            impressaoMesSwitch();
            break;
        case 6:
            calculoTaxaNatalidadeMortalidade();
            break;
        case 7:
            calculoValorFinalDescontoAVista();
            break;
        case 0:
            console.log("Saindo do programa. Até mais!");
            process.exit(0);
        default:
            console.log("Opção inválida. Tente novamente.");
    }
} 
