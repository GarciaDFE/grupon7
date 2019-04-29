const $navBar = document.querySelector("#header");
const $btnToup = document.querySelector(".btn-toup");

window.onscroll = function() {
  var top = window.pageYOffset;
  if (top > 300) {
    $btnToup.classList.add("-visible");
  } else {
    $btnToup.classList.remove("-visible");
  }
};

$btnToup.addEventListener("click", function() {
  smoothScroll($navBar, 2000);
});

// const smoothScroll = (target, duration) => {
//   const $target = target;
//   const $targetPosition = $target.getBoundingClientRect().top;
//   const $startPosition = window.pageYOffset;
//   const distance = $targetPosition - $startPosition;
//   let startTime = null;

//   const animation = currentTime => {
//     if (startTime === null) startTime = currentTime;
//     const timeElapsed = currentTime - startTime;
//     const run = ease(timeElapsed, $startPosition, distance, duration);
//     window.scrollTo(0, run);
//     if (timeElapsed < duration) requestAnimationFrame(animation);
//   };

//   const ease = (t, b, c, d) => {
//     t /= d / 2;
//     if (t < 1) return (c / 2) * t * t + b;
//     t--;
//     return (-c / 2) * (t * (t - 2) - 1) + b;
//   };

//   requestAnimationFrame(animation);
// };
