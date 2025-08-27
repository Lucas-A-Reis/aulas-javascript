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

// detectando eventos
/* Um evento é aquilo que, quando acontece, pode disparar ações no programa/site/aplicação. 
Exemplos: clicar, pressionar tecla, tocar na tela, scrollar a página, recarregar a página e etc.*/

exemplo01.addEventListener("mouseover", function () {
    mensagem01.textContent = "Ai! laurië lantar lassi súrinen";
    mensagem01.classList.add("destaque");
});

mensagem01.addEventListener("dblclick", function () {
    mensagem01.textContent = "Yéni únótimë ve rámar aldaron!";
    mensagem01.classList.remove("destaque");
});

/* 
Exercícios
 
1) Crie uma constante nova e selecione o h1 da sua página
2) Crie um evento em que, ao passar o mouse em cima do h1, o texto mude para "Praticando Eventos!" e também fique centralizado.
3) Faça também um evento de clique para que, quando clicar na palavra "Referências", o texto do h1 volte para a palavra "Eventos" e o alinhamento volte a ficar à esquerda (padrão). 
*/

const titulo = document.querySelector("h1");
titulo.addEventListener("mouseover", function () {
    titulo.textContent = "Praticando Eventos!";
    titulo.classList.add("centraliza");
})

document.querySelector("#referencias").addEventListener("click", function () {
    titulo.textContent = "Eventos";
    titulo.classList.remove("centraliza");
})

let b = false;

document.querySelector("#noturno").addEventListener("click", function () {
    if (b == 0) {
        b = true;
        document.querySelector("#ex03").textContent = "Exemplo 03: Modo Claro";
        document.querySelector("body").classList.add("temaescuro")
    } else {
        b = false;
        document.querySelector("body").classList.remove("temaescuro");
        document.querySelector("#ex03").textContent = "Exemplo 03: Modo Noturno";
    }
})



