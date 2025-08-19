'use strict'

console.log('hahaha');
let número = 50;
let estoque = ! false;
if (estoque == true) {
    console.log('estoque disponível');
} else {
    console.log('estoque indisponível');
}

let aluno = {
    nome: 'frodo bolseiro',
    idade: 53
};

if (aluno.idade < 18) {
    console.log(`${aluno.nome} é menor de idade`);
} else {
    console.log(`${aluno.nome} é maior de idade`);
};

let nota = 4;
let nota2 = 10;
let media = (nota + nota2) / 2;
if (media >= 7) {
    console.log('aprovado!');
} else {
    console.log('reprovado!');
};

if (media > 9) {
    console.log('óptimo!');
} else if(media > 7) {
    console.log('excelente');
} else if (media > 5) {
    console.log('muito bem');
} else {
    console.log('desista!');
};

