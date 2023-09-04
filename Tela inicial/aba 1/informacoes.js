const zed = document.querySelector(".Zed")
const ashe = document.querySelector(".Ashe")
const modalZed = document.querySelector(".dialogZed")
const modalAshe = document.querySelector(".dialogAshe")
const closeModalZed = document.querySelector("dialog .fecharModalZed")
const closeModalAshe = document.querySelector("dialog .fecharModalAshe")

zed.onclick = function (){
    modalZed.showModal()
}
closeModalZed.onclick = function (){
    modalZed.close()
}
ashe.onclick = function (){
    modalAshe.showModal()
}
closeModalAshe.onclick = function (){
    modalAshe.close()
}
