'use strict'

/*Sobre Funções
Funções são blocos de código responsáveis por executar determinadas tarefas. Para usar estes blocos/funções, é necessário "chamar/invocar" a função desejada através do seu nome.
 
Vantagens ao usar funções:
- Reutilização de código
- Organização de código-fonte, permitindo a separação de diferentes lógicas e responsabilidades
- Performance melhor
- Maior facilidade para manutenções
 
No JavaScript, exitem varias maneiras de se criar uma função: função anônima, função nomeada/declarada e arrow function*/
 
console.log("Exemplo 1: função anônima");
 
const exemplo1 = function(){
    //corpo da função: ação que função vai fazer
    console.log("Ola Função Anônima");
   
}

exemplo1();

console.log('Exemplo 2: função nomeada (ou declarada)');

function exemplo2 () {
    console.log('esta é uma função nomeada, sem necessidade de variável ou c');
}

exemplo2();

console.log('Exemplo 3: arrow function');

const exemplo3 = () => {
    console.log('sintaxe arrow function!');
    
}

exemplo3();

/* 
Funções também podem trabalhar com parâmetros/argumentos

Quando uma função precisa de valores/dados para algum processamento, ela os recebe através de parâmetros/dados entre os parênteses.

Geralmente, ao terminar um resultado, a função retorna pra fora um resultado.
*/

function saudacao (nome = "visitante") {
    console.log(`Olá ${nome}`);
    
}

saudacao('mundo');
saudacao();

function multiplicadora(valor1, valor2) {
    return valor1 * valor2
}

let result1 = multiplicadora(2, 10);
let result2 = multiplicadora(8, 2);

console.log(`Resultado 1: ${result1}`);
console.log("Resultado 2: "+result2);

//Sempre que houver a necessidade de trabalhar com o resultado do processamento de uma função, usaremos o return

console.log("Exemplo 6: Simplificando com arrow function");

const somar = (valor1, valor2) => valor1 + valor2;

console.log(somar(929,497));



//bobeira

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

let number = getRndInteger(0,4);
console.log(number);

