'use strict'
const campoBusca = document.querySelector("#busca");
const clientes = document.querySelectorAll("#clientes li");

campoBusca.addEventListener("input", function(){
    const termoDigitado = campoBusca.value.toLowerCase();
    for (const cliente of clientes) {
        if(cliente.textContent.toLowerCase().includes(termoDigitado)){
            cliente.style.display = "list-item";
        } else {
            cliente.style.display = "none";
        }
    }
})