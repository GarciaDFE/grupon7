const $comSubmenu = document.querySelector(".comSubmenu");
const $subMenu = document.querySelector(".item .submenu");

function clickComSubmenu() {
  if ($subMenu.classList.contains("active")) {
    $subMenu.classList.remove("active");
    event.preventDefault();
  } else {
    $subMenu.classList.add("active");
    event.preventDefault();
  }
}

$comSubmenu.addEventListener("click", clickComSubmenu);
