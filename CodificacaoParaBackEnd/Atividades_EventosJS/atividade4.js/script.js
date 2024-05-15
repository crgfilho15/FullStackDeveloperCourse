// 4. Utilizando função: Crie um programa que leia um valor inicial A e exiba a sequência de valores do cálculo de A! e o seu resultado. 
// 	Ex: 5! = 5 X 4 X 3 X 2 X 1 = 120 

function calcularFatorial() {
  var numero = parseInt(document.getElementById('numero').value);
  var resultado = 1;
  var sequencia = "";

  if (numero < 0) {
      document.getElementById('resultado').innerText = "O número deve ser positivo.";
      return;
  }

  for (var i = numero; i >= 1; i--) {
      resultado *= i;
      sequencia += i;
      if (i > 1) sequencia += ' X ';
  }

  document.getElementById('resultado').innerText = numero + '! = ' + sequencia + ' = ' + resultado;
}