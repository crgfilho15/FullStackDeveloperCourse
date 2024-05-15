// 3. Utilizando objeto: Crie um programa que leia os dados de um aluno: nome, matrícula,
//      disciplina, nota. 
//    - Se a nota do aluno for maior ou igual a 60 exiba no console “Aprovado”.
//    - Se a nota do aluno for menor que 60 porém maior ou igual a 50 
//    exiba no console “Em recuperação” 
//    - Se a nota do aluno for menor que 50 exiba no console “Reprovado”.
//    criar nova propriedade chamada situacao para o aluno.

function cadastrarAluno() {
  const nome = document.getElementById('nome').value;
  const matricula = document.getElementById('matricula').value;
  const disciplina = document.getElementById('disciplina').value;
  const nota = parseFloat(document.getElementById('nota').value);

  if (!isNaN(nota) && nota >= 0 && nota <= 100) {
      let situacao;
      if (nota >= 60) {
          situacao = "Aprovado";
      } else if (nota >= 50) {
          situacao = "Em Recuperação";
      } else {
          situacao = "Reprovado";
      }

      const aluno = {
          nome: nome,
          matricula: matricula,
          disciplina: disciplina,
          nota: nota,
          situacao: situacao
      };

      console.log("Dados do Aluno:");
      console.log(`Nome: ${aluno.nome}`);
      console.log(`Matrícula: ${aluno.matricula}`);
      console.log(`Disciplina: ${aluno.disciplina}`);
      console.log(`Nota: ${aluno.nota}`);
      console.log(`Situação: ${aluno.situacao}`);
  } else {
      alert('Insira uma nota válida (entre 0 e 100).');
  }
}