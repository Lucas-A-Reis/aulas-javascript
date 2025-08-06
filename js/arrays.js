'use strict'
let vocalistas = ["Ozzy","Dio","Floor Jansen", "Manoel Gomes"];
console.log(vocalistas[0]);

console.log(`O ${vocalistas[3]} está em turnê tocando PinkFloyd`)

let idk = 6;
const coisas = [10, "senac", "<h1>Oie</h1>", idk, 7.55];
console.log(coisas[2]);

// Exercícios

// 1) Crie um array contendo o nome de 7 coisas que vc gosta (exempolos: artistas, músicas, livros, comida... sei lá, inventa!")

// 2) Em seguida, mostre no console uma frase personalizada indicando o segundo, o quinto e o sétimo elemento do array. Use concatenação e/ou template string.

const lista = ["eminem", "oitavo anjo do apocalipse", "senhor dos anéis", "mandioca com carne", "podcast à deriva", "cururu", "ethica nichomachea"];
console.log(`Eu ouvi ${lista[1]} em loop, mas depois enjooei e então fui ouvir um episódio do ${lista[4]}. Aí quando esse episódio acabou eu fui ler a ${lista[6]}.`);

// Array MATRIZ bidimensional
const tecnologias = [
    ["HTML", "CSS", "JavaScript"],
    ["Figma", "Photoshop"],
    ["PHP", "Node.js", "SQL", "Express"],
];
// console.log(tecnologias);
console.log(tecnologias[0][2]);
console.log(tecnologias[1][0]);
console.log(tecnologias[2][3]);