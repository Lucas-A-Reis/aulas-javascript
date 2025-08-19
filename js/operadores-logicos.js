'use script'
/*
    Operadores logicos
    && -> e
    || -> ou
    ! -> não
*/

// && retorna true se todas as condições forem verdadeiras
console.log("exemplo&&");
let idade = 16;
let temCarta = true;
if (idade >= 18 && temCarta === true){
    console.log('pode dirigir');
} else {
    console.log('não pode dirigir');
}

// sobre duplo e triplo sinal de ingualdade
let a = 10;
let b = '10';
let resultado = a === b;
console.log(resultado);
// == compara apenas os caracteres e ignora a diferença de tipo de dado, se houver
// === compara os caracteres e também o tipo de dado

console.log("exemplo||");
let feriado = false;
let fimdesemana = false;
if (feriado === true || fimdesemana === true) {
    console.log("não tem aula");
} else {
    console.log("tem aula");
}

console.log("!");
let BlackFryday = false;
if (!BlackFryday) {
    console.log('preços normais');
} else {
    console.log('preços com desconto');
}