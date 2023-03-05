//Menu hamburguer
const menuEl = document.querySelector("#menu-botao")
const menuAbertoDivEl = document.querySelector(".cabecalho-menu-fechado")

menuEl.addEventListener("click", () => {
    menuAbertoDivEl.classList.toggle("cabecalho-menu-aberto")
});

//Links da navegação
const linkHomeEl = document.querySelector("#link-home")
const linkSobreEl = document.querySelector("#link-sobre")
const linkTechEl = document.querySelector("#link-tech")
const linkProjetosEl = document.querySelector("#link-projetos")

const links = [linkHomeEl, linkSobreEl, linkTechEl, linkProjetosEl]
links.forEach((a) => {
    a.addEventListener("click", () => {
        menuAbertoDivEl.classList.toggle("cabecalho-menu-aberto")
    })
})

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

