const senha = document.querySelector(".senhaEsquecida")
const abrirModal = document.querySelector(".dialogPai")
const fecharModal = document.querySelector(".fecharModalSenhaEsquecida")

senha.onclick = function (){
    abrirModal.showModal()
}
fecharModal.onclick = function (){
    abrirModal.close()
}