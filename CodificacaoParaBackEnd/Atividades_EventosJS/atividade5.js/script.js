// 5. Utilizando função: Crie um programa que leia a largura e o comprimento de um terreno 
// retangular, calculando e mostrando a sua área em m² (largura x comprimento). 
// O programa também deve mostrar a classificação desse terreno, de acordo com a lista abaixo: 
// - Abaixo de 100m² = TERRENO POPULAR 
// - Entre 100m² e 500m² = TERRENO MASTER 
// - Acima de 500m² = TERRENO VIP

function calcularArea() {
    var largura = parseFloat(document.getElementById('largura').value);
    var comprimento = parseFloat(document.getElementById('comprimento').value);

    if (largura <= 0 || comprimento <= 0) {
        document.getElementById('resultado').innerText = "Por favor, insira valores válidos para largura e comprimento.";
        return;
    }

    var area = largura * comprimento;

    var classificacao = "";
    if (area < 100) {
        classificacao = "TERRENO POPULAR";
    } else if (area >= 100 && area <= 500) {
        classificacao = "TERRENO MASTER";
    } else {
        classificacao = "TERRENO VIP";
    }

    document.getElementById('resultado').innerText = "Área do terreno: " + area.toFixed(2) + " m². Classificação: " + classificacao;
}