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
    console.log('K vale '+j);
};

for( let k = 10; k >= 1; k--){
    console.log('K vale '+k);
};

// loop e array

const valar = ['aulë', 'manwë', 'varda', 'tulkas', 'melkor']

for( let i = 0; i < valar.length; i++) {
    console.log(valar[i]);
};

// for of

for (const vala of valar) {
    console.log(vala);
}

const elda = {
    nome: 'celebrimbor',
    idade: 900,
    reino: 'eregion',
};

// for in

for (const prop in elda) {
    console.log(elda[prop]);
}
