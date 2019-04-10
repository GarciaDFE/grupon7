let $slide = Math.floor(Math.random() * 3);

new Glide(".glide", {
  type: "carousel",
  gap: 0,
  startAt: $slide,
  perView: 1,
  autoplay: 5000,
  hoverpause: true,
  animationDuration: 1000
}).mount();
