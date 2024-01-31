// Objeto Aluno
let aluno1 = {
    nome: "Maria",
    matricula: "123",
    cursos: ["Matemática", "Ciências"],
};

let aluno2 = {
    nome: "Pedro",
    matricula: "456",
    cursos: ["História", "Geografia"],
};

// Objeto Professor
let professor1 = {
    nome: "Ana",
    disciplinas: ["Matemática", "Física"],
};

let professor2 = {
    nome: "Carlos",
    disciplinas: ["História", "Geografia"],
};

// Array de Alunos e Professores
let alunos = [aluno1, aluno2];
let professores = [professor1, professor2];

// Função para inscrever aluno em curso
function inscreverAlunoEmCurso(aluno, curso) {
    aluno.cursos.push(curso);
    console.log(`${aluno.nome} foi inscrito no curso de ${curso}.`);
}

// Exemplo de inscrição em curso
inscreverAlunoEmCurso(aluno1, "Inglês");

// Exibindo estado atual da escola
console.log("\nEstado Atual da Escola:");
console.log("Alunos:");
for (let aluno of alunos) {
    console.log(`Nome: ${aluno.nome}, Matrícula: ${aluno.matricula}, Cursos: ${aluno.cursos.join(", ")}`);
}

console.log("\nProfessores:");
for (let professor of professores) {
    console.log(`Nome: ${professor.nome}, Disciplinas: ${professor.disciplinas.join(", ")}`);
}
