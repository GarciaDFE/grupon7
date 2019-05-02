// BOTÃO FLUTUTANTE TO TOP & EFEITO REDUÇÃO HEADER
const $wrapHeader = document.querySelector(".wrap-header");
const $btnToTop = document.querySelector(".btn-totop");
const landmark = 300;
// NEVEGAÇÃO NA PÁGINA COM EFEITO DE SCROLL SUAVE
const $itemServicos = document.querySelector("#itemServicos");
const $itemParceiros = document.querySelector("#itemParceiros");
const $itemContato = document.querySelector("#itemContato");
const $Services = document.querySelector(".wrap-services");
const $Partners = document.querySelector(".wrap-partners");
const $Contacts = document.querySelector(".main-footer");
let $positionServices = 0;
let $positionPartners = 0;
let $positionContacts = 0;

const breakPhone = 599;
const descontoAlturaHeader = 80;

// BOTÃO FLUTUTANTE TO TOP & EFEITO REDUÇÃO HEADER
window.onscroll = function() {
  var top = window.pageYOffset;
  if (top > landmark) {
    $btnToTop.classList.add("-visible");
    $wrapHeader.classList.add("scrolleffect");
  } else {
    $btnToTop.classList.remove("-visible");
    $wrapHeader.classList.remove("scrolleffect");
  }
};

$btnToTop.addEventListener("click", function() {
  smoothScroll($wrapHeader, 2000, 0);
});

//NEVEGAÇÃO NA PÁGINA COM EFEITO DE SCROLL SUAVE
if ($Services != null) {
  $positionServices = $Services.getBoundingClientRect().top;
}

if ($Partners != null) {
  $positionPartners = $Partners.getBoundingClientRect().top;
}

if ($Contacts != null) {
  $positionContacts = $Contacts.getBoundingClientRect().top;
}

$itemServicos.addEventListener("click", function() {
  $view = window.innerWidth;
  if ($view > breakPhone && $Services != null) {
    smoothScroll($Services, 2000, $positionServices - descontoAlturaHeader);
  }
});

$itemParceiros.addEventListener("click", function() {
  smoothScroll($Partners, 2000, $positionPartners - descontoAlturaHeader);
});

$itemContato.addEventListener("click", function() {
  smoothScroll($Contacts, 2000, $positionContacts - descontoAlturaHeader);
});

// CONTROLA O EFEITO DE SCROLL SUAVE
const smoothScroll = (target, duration, position) => {
  let $target = target;
  let $targetPosition = position;
  let $startPosition = window.pageYOffset;
  let distance = $targetPosition - $startPosition;
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
