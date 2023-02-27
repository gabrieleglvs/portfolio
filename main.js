//Menu hamburguer
const menuEl = document.querySelector("#menu-botao")
const menuAbertoDivEl = document.querySelector(".cabecalho-menu-fechado")

menuEl.addEventListener("click", () => {
    menuAbertoDivEl.classList.toggle("cabecalho-menu-aberto")
});

//Setas para baixo
const setaSobreMimEl = document.querySelector("#sobre-mim-seta")
const textoSobreMinEl = document.querySelector(".sobre-mim-texto")

setaSobreMimEl.addEventListener("click", () => {
    textoSobreMinEl.classList.toggle("sobre-aberto")
})

const setaEducacaoEl = document.querySelector("#educacao-seta")
const textoSobreEducacaoEl = document.querySelector(".sobre-educacao-texto")

setaEducacaoEl.addEventListener("click", () => {
    textoSobreEducacaoEl.classList.toggle("sobre-aberto")
})

