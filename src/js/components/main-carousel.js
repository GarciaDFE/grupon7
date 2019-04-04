var $bullet = document.querySelectorAll(".bullet");
var $bulletIsActive = document.querySelector(".bullet.-isActive");
var $cardIsActive = document.querySelector(".card.-isActive");

$bullet.forEach((item) => {
   item.addEventListener("click", clickInBullet)
})

function clickInBullet() {
   var $bulletClicked = this
   $bulletIsActive.classList.remove("-isActive"); /* desativa o bullet anterior */
   $bulletClicked.classList.add("-isActive"); /* ativa o bullet clicado */
   $bulletIsActive = $bulletClicked; /* seta o novo bullet ativo */

   $cardIsActive.classList.remove("-isActive"); /* desativa o card anterior */
   var idCard = $bulletClicked.querySelector("a").getAttribute("href"); /* guarda na variável o atributo "href" associado ao card que ficará ativo de acordo com o novo bullet ativado com o último click */
   var $targetCard = document.querySelector(idCard); /* Seleciona qual o card que ficará ativo de acordo com a variável "idCard" */
   $targetCard.classList.add("-isActive"); /* ativa o card do bullet clicado relacionado */
   $cardIsActive = $targetCard; /* seta o novo card ativo */
}