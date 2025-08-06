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

/* Exercícios

1. Crie um objeto chamado "aluno" contendo os seguintes dados:

- Nome Completo
- Data de Nascimento
- (Use ARRAY) Lista de telefones (fixo e celular)
- (DESAFIO: use um OBJETO nesta propriedade) Endereço contendo (separadamente):
  - rua
  - número
  - bairro

2. Mostre no console o nome do aluno, o telefone celular e o bairro em que mora. */

let aluno = {
    nome: "Cláudio Damaceno Yamaguchi",
    data_de_nascimento: "08/08/1988",
    telefones: ["99967-8881", "99988-8153"],
    endereço: {
        rua: "Rua Riacho",
        número: 888,
        bairro: "São Jorge",
    } 
}

console.log(`o número do aluno ${aluno.nome} é ${aluno.telefones[1]} e ele reside no bairro ${aluno.endereço.bairro}`);
