const $image = document.querySelectorAll(".image");
const $btn = document.querySelectorAll(".btn.service");

$image.forEach((image, index) => {
   image.addEventListener("mouseover", () => {
      $btn[index].classList.add("hovereffect");
   });
   image.addEventListener("mouseout", () => {
      $btn[index].classList.remove("hovereffect");
   });
});

$btn.forEach((btn, index) => {
   btn.addEventListener("mouseover", () => {
      $image[index].classList.add("hovereffect");
   });
   btn.addEventListener("mouseout", () => {
      $image[index].classList.remove("hovereffect");
   });
});