const $phoneInput = document.querySelector("#phone");

new Cleave($phoneInput, {
  phone: true,
  phoneRegionCode: "BR"
});
