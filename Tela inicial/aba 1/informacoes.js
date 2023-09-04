const zed = document.querySelector(".Zed")
const modal = document.querySelector("dialog")
const closeModal = document.querySelector("dialog .fecharModal")

zed.onclick = function (){
    modal.showModal()
}

closeModal.onclick = function (){
    modal.close()
}