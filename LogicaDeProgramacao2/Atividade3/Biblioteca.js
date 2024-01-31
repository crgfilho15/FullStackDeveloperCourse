// Objeto Livro
let livro1 = {
    titulo: "A Arte da Guerra",
    autor: "Sun Tzu",
    anoPublicacao: 500,
    disponivel: true
};

let livro2 = {
    titulo: "Dom Quixote",
    autor: "Miguel de Cervantes",
    anoPublicacao: 1605,
    disponivel: false
};

// Array de Livros
let biblioteca = [livro1, livro2];

// Função para realizar empréstimo
function realizarEmprestimo(livro, aluno) {
    if (livro.disponivel) {
        livro.disponivel = false;
        console.log(`${aluno} realizou o empréstimo do livro "${livro.titulo}".`);
    } else {
        console.log(`O livro "${livro.titulo}" não está disponível para empréstimo.`);
    }
}

// Exemplo de empréstimo
realizarEmprestimo(livro1, "João");

// Exibindo estado atual da biblioteca
console.log("\nEstado Atual da Biblioteca:");
for (let livro of biblioteca) {
    console.log(`Livro: ${livro.titulo}, Autor: ${livro.autor}, Disponível: ${livro.disponivel}`);
}
