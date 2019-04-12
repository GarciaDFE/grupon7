
const $wrapHeader = document.querySelector('.wrap-header');
let backToTop = 0;

window.addEventListener('scroll', () => {
   const $scrolled = window.scrollY;
   const landmark = 600;
   if (($scrolled >= landmark) && !backToTop) {
      $wrapHeader.classList.add('scrolleffect');
      backToTop = !backToTop;
   }
   else if (($scrolled <= landmark) && backToTop) {
      $wrapHeader.classList.remove('scrolleffect');
      backToTop = !backToTop;
   }
});