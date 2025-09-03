'use strict'
const campoBusca = document.querySelector("#busca");
const clientes = document.querySelectorAll("#clientes li");

//Monitora o input na barra de pesquisa
campoBusca.addEventListener("input", function(){
    //Constante "termo Digitato" igual ao valor inserido no "campoBusca"
    const termoDigitado = campoBusca.value.toLowerCase();
    //Loop que verifica cada item de clientes para submetê-los a condição
    for (const cliente of clientes) {
        //A condição que checa os itens da lista e compara com o input da pesquisa
        if(cliente.textContent.toLowerCase().includes(termoDigitado)){
            //Muda display
            cliente.style.display = "list-item";
        } else {
            cliente.style.display = "none";
        }
    }
})