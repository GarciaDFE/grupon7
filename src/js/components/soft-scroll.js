const $originServices = document.querySelector(".-originservices");
const $originPartners = document.querySelector(".-originpartners");
const $originFooter = document.querySelector(".-originfooter");
const $Services = document.querySelector(".wrap-services");
const $Partners = document.querySelector(".wrap-partners");
const $Contacts = document.querySelector(".main-footer");
const $btnV1 = document.querySelector(".-v1");
const $btnV2 = document.querySelector(".-v2");
let $view = 0;
let breakPhone = 599;

$originServices.addEventListener("click", function() {
  $view = window.innerWidth;
  if ($view > breakPhone) {
    smoothScroll($Services, 1000);
  }
});

$originPartners.addEventListener("click", function() {
  smoothScroll($Partners, 2000);
});

$originFooter.addEventListener("click", function() {
  smoothScroll($Contacts, 2000);
});

$btnV1.addEventListener("click", function() {
  smoothScroll($originServices, 2000);
});

$btnV2.addEventListener("click", function() {
  smoothScroll($originServices, 2000);
});

let navbarFixHeight = 100; //para abaixar do topo em casos de header fixo

const smoothScroll = (target, duration) => {
  const $target = target;
  const $targetPosition = $target.getBoundingClientRect().top;
  const $startPosition = window.pageYOffset;
  const distance = $targetPosition - ($startPosition + navbarFixHeight);
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
