'use strict'

console.log("teste");

/* 
loops são comandos que, baseados nalguma condição, executam uma ação repetidas vezes 
Comandos mais tradicionais: while e for.
Normalmente, os loops são controlados através de uma variável contadora (comumente chamada de "i", "j", "k" ou outra letra).
*/

console.log("Exemplo 1: WHILE (enquanto)");

let i = 1;
while (i <= 5){
    console.log("Valor do i:"+i);
    i++; // incremento 
    // i = i + 1;
    // i += 1;
}


console.log("\nExemplo 2: FOR");

// for(inicialização da variável, condição e atualização)
for( let j = 1; j <= 10; j++ ){
    console.log('J vale '+j);
};
