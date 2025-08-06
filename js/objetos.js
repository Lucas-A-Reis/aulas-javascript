'use strict';
console.log("i luv u");

let pessoa = {
    nome: "Chaves", idade: 8, cidade: "São Paulo", estado: "SP"
}
;

console.log(pessoa);

console.log(`O ${pessoa.nome} tem ${pessoa.idade} anos e mora em ${pessoa.cidade}.`);

const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    volumes: ["A Sociedade do Anel", "As duas Torres", "O Retorno do Rei"]
}

console.log(livro);
console.log(livro.autor);
console.log(livro.volumes[1]);

const livros = [
    {titulo: "assassinato do expresso do oriente", autor: "agata christie"},
    {titulo: "crepusculo", autor: "stephane meyers"},
    {titulo: "ramayana", autor: "vyasa"}
]
;

console.log(livros[2].autor);
