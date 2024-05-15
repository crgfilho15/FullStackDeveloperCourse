// 1. Utilizando função: Tendo como dados de entrada o peso (em quilogramas)
//    e a altura (em metros) de uma pessoa, 
//    crie um programa que calcule o Índice de Massa Corporal (IMC) dessa pessoa. 
// Calcule o IMC usando a fórmula: IMC = peso / (altura * altura). 
// Classifique o IMC da seguinte forma:
// - IMC < 18,5 Kg/m²: Abaixo do Peso
// - IMC >= 18,5 Kg/m² e < 24,9 Kg/m²: Peso Normal
// - IMC >= 25 Kg/m² e < 29,9 Kg/m²: Sobrepeso
// - IMC >= 30 Kg/m² e < 34.9 Kg/m²: Obesidade Grau I
// - IMC >= 35 Kg/m² e < 39.9 Kg/m²: Obesidade Grau II
// - IMC >= 39.9 Kg/m²: Obesidade Grau III

function calcularIMC() {
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);

  if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
    const imc = peso / (altura * altura);
    const classificacao = classificarIMC(imc);

    document.getElementById("imcValue").textContent = imc.toFixed(2);
    document.getElementById("classificacao").textContent = classificacao;

    // document.getElementById("resultado");
  } else {
    alert("Por favor, insira valores válidos para peso e altura.");
  }
}

function classificarIMC(imc) {
  if (imc < 18.5) {
    return "Abaixo do Peso";
  } else if (imc >= 18.5 && imc < 25) {
    return "Peso Normal";
  } else if (imc >= 25 && imc < 30) {
    return "Sobrepeso";
  } else if (imc >= 30 && imc < 35) {
    return "Obesidade Grau I";
  } else if (imc >= 35 && imc < 40) {
    return "Obesidade Grau II";
  } else {
    return "Obesidade Grau III";
  }
}
