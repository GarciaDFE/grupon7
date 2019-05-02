const $menu = document.querySelector(".menu");
const $btnMenu = document.querySelector(".main-btnMenu");

function clickBtnMenu() {
  if ($btnMenu.classList.contains("imgBtnOpen")) {
    $menu.classList.add("menu-open");
    $btnMenu.classList.remove("imgBtnOpen");
    $btnMenu.classList.add("imgBtnClose");
    $btnMenu.classList.add("change");
    event.preventDefault();
  } else {
    $menu.classList.remove("menu-open");
    $btnMenu.classList.remove("imgBtnClose");
    $btnMenu.classList.add("imgBtnOpen");
    $btnMenu.classList.remove("change");
    event.preventDefault();
  }
}

$btnMenu.addEventListener("click", clickBtnMenu);
