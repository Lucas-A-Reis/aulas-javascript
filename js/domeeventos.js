'use strict';

// Exemplo 1

// Procurando (querySelector) por um elemento identificado por #exemplo01
const exemplo01 = document.getElementById("exemplo01");
const mensagem01 = document.querySelector("#mensagem01");
const pagina = document.querySelector("body");
console.log(exemplo01);
console.log(mensagem01);
console.log(pagina);
// Para selecionar todos os elementos, use querySelectorAll. O resultado será uma espécie de array chamada NodeList
const paragrafo = document.querySelectorAll("p"); 
console.log(paragrafo);

