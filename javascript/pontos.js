const modal = document.getElementById("myModal");

function ampliar(imagem) {  
  let modalImg = document.getElementById("img");
  let captionText = document.getElementById("caption");
  modal.style.display = "flex";
  modalImg.src = imagem.src;
  captionText.innerHTML = imagem.alt;
}

const sair = function() {
  modal.style.display = "none";
};