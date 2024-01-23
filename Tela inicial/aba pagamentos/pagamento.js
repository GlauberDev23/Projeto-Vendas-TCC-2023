const zedPagamentos = document.querySelector(".comprarAgoraZed")
const modalZedPagamentos = document.querySelector(".dialogZedPagamentos")
const closeModalZedPagamentos = document.querySelector(".fecharModalZedPagamentos")
zedPagamentos.onclick = function (){
    modalZedPagamentos.showModal()
}

function mudarImagemZed(novaImagem) {
      // Obtenha a referência da imagem principal Zed
      var imagemPrincipalZed = document.getElementById('imagemPrincipalZed');

      // Altere o atributo src da imagem principal Zed para a nova imagem
      imagemPrincipalZed.src = novaImagem;
    }