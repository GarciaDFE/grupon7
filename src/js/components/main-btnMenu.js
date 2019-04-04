const $menu = document.querySelector(".menu");
const $btnMenu = document.querySelector(".btn-menu");

function clickBtnMenu() {
	if ($btnMenu.classList.contains("imgBtnOpen")) {
		$menu.classList.add("menu-open");
		$btnMenu.classList.remove("imgBtnOpen");
		$btnMenu.classList.add("imgBtnClose");
		$btnMenu.classList.add("change");
		console.log("Cliquei imgBtnOpen")
		event.preventDefault();
	} else {
		$menu.classList.remove("menu-open");
		$btnMenu.classList.remove("imgBtnClose");
		$btnMenu.classList.add("imgBtnOpen");
		$btnMenu.classList.remove("change");
		console.log("Cliquei imgBtnClose");
		event.preventDefault();
	}
}

$btnMenu.addEventListener("click", clickBtnMenu);