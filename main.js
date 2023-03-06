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
//SOBRE MIM
const setaSobreMimEl = document.querySelector("#sobre-mim-seta")
const textoSobreMinEl = document.querySelector(".sobre-mim-texto")
//SOBRE EDUCAÇÃO
const setaEducacaoEl = document.querySelector("#sobre-educacao-seta")
const textoSobreEducacaoEl = document.querySelector(".sobre-educacao-texto")

//Título ao lado das setas
//SOBRE MIM
const sobreMimTitleEl = document.querySelector("#sobre-mim-t")
//SOBRE EDUCAÇÃO
const sobreEduTitleEl = document.querySelector("#sobre-educacao-t")

setaSobreMimEl.addEventListener("click", () => {
    textoSobreMinEl.classList.toggle("sobre-aberto")
})

sobreMimTitleEl.addEventListener("click", () => {
    textoSobreMinEl.classList.toggle("sobre-aberto")
})

setaEducacaoEl.addEventListener("click", () => {
    textoSobreEducacaoEl.classList.toggle("sobre-aberto")
})

sobreEduTitleEl.addEventListener("click", () => {
    textoSobreEducacaoEl.classList.toggle("sobre-aberto")
})




