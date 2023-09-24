const senha = document.querySelector(".senhaEsquecida")
const abrirModal = document.querySelector(".dialogPai")
const fecharModal = document.querySelector(".fecharModalSenha")

senha.onclick = function (){
    abrirModal.showModal()
}