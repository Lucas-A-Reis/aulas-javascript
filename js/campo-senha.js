'use strict'
const campoSenha = document.querySelector("#senha");
const botaoMostrar = document.querySelector("#mostrar");

botaoMostrar.addEventListener("pointerdown", function () {
    senha.type = "text";
});

botaoMostrar.addEventListener("pointerup", function () {
    senha.type = "password";
});

// Pointerout, pointerleave, pointermove
botaoMostrar.addEventListener("pointerout", function () {
    senha.type = "password";
});



