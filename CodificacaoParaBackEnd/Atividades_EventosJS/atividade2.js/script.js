// 2. Utilizando objeto: Crie um programa que leia os dados de um usuário: 
//     nome, sobrenome, CPF, sexo, data de nascimento, endereço e telefone e exiba no console.

function cadastrarUsuario() {
  const nome = document.getElementById('nome').value;
  const sobrenome = document.getElementById('sobrenome').value;
  const cpf = document.getElementById('cpf').value;
  const sexo = document.getElementById('sexo').value;
  const dataNascimento = document.getElementById('dataNascimento').value;
  const endereco = document.getElementById('endereco').value;
  const telefone = document.getElementById('telefone').value;

  const usuario = {
    nome: nome,
    sobrenome: sobrenome,
    cpf: cpf,
    sexo: sexo,
    dataNascimento: dataNascimento,
    endereco: endereco,
    telefone: telefone,
  };

  console.log("Dados do Usuário:");
  console.log(`Nome Completo: ${usuario.nome} ${usuario.sobrenome}`);
  console.log(`CPF: ${usuario.cpf}`);
  console.log(`Sexo: ${usuario.sexo}`);
  console.log(`Data de Nascimento: ${usuario.dataNascimento}`);
  console.log(`Endereço: ${usuario.endereco}`);
  console.log(`Telefone: ${usuario.telefone}`);
}