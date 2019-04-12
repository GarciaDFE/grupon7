const $mainNavigation = document.querySelector('.main-navigation');
console.log($mainNavigation);
let backToTop = 0;

window.addEventListener('scroll', () => {
  const $scrolled = window.scrollY;
  const landmark = 600;
  if (($scrolled >= landmark) && !backToTop) {
    console.log("Para baixo");
    $mainNavigation.classList.add('scrolleffect');
    backToTop = !backToTop;
  } 
  else if (($scrolled <= landmark) &&  backToTop) {
    console.log("Para cima");
    $mainNavigation.classList.remove('scrolleffect');
    backToTop = !backToTop;
  } 
});