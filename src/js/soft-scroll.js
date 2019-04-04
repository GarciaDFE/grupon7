const $originServices = document.querySelector(".-originservices");
const $originPartners = document.querySelector(".-originpartners");
const $wrapServices = document.querySelector(".wrap-services");
const $wrapPartners = document.querySelector(".wrap-partners");
const $btnV1 = document.querySelector(".-v1");
const $btnV2 = document.querySelector(".-v2");

$originServices.addEventListener("click", function() {
  smoothScroll($wrapServices, 1000);
});

$btnV1.addEventListener("click", function() {
  smoothScroll($originServices, 5000);
});

$originPartners.addEventListener("click", function() {
  smoothScroll($wrapPartners, 2000);
});

$btnV2.addEventListener("click", function() {
  smoothScroll($originServices, 6000);
});

const smoothScroll = (target, duration) => {
  const $target = target;
  const $targetPosition = $target.getBoundingClientRect().top;
  const $startPosition = window.pageYOffset;
  const distance = $targetPosition - $startPosition;
  let startTime = null;

  const animation = currentTime => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, $startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  const ease = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  requestAnimationFrame(animation);
};
