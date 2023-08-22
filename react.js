const range = document.querySelector(".real-range-adjustment");
const percents = document.querySelector(".percents");
const lamp = document.querySelector(".lamp");
const light = document.querySelector(".light");
const checkbox = document.querySelector(".real-power-checkbox");
const on_off_block = document.querySelector(".on-off-block");
const body = document.querySelector("body");
const decorations = document.querySelectorAll(".decor");
//
let audio = new Audio();
// audio.preload = "auto";
audio.src = "./zvuk-vklyucheniya.mp3";
//

range.addEventListener("input", function (e) {
  // показываем процент
  let range_value = `${e.target.value}%`;
  percents.innerText = range_value;
  //   изменим размытие света
  let light_blur = e.target.value / 5 + 2;
  let light_blur_fixed = light_blur.toFixed(0);
  //  изменим растяжение света
  let light_stretch = e.target.value / 10;
  let light_stretch_fixed = light_stretch.toFixed(0);
  //   изменим позицию света
  let light_position = e.target.value / 20;
  let light_position_fixed = light_position.toFixed(0);
  //   изменим свет лампочки
  light.style.boxShadow = `0 ${light_position_fixed}px ${light_blur_fixed}px ${light_stretch_fixed}px`;
  // добавим вибрацию
  window.navigator.vibrate(5);
  // вкл/выкл кнопку
  if (range.value > 0) {
    checkbox.checked = true;
    decorations.forEach((item) => {
      item.style.cssText = "background-color: rgba(138, 171, 211, 1)";
    });
  } else if (range.value < 25) {
    checkbox.checked = false;
    decorations.forEach((item) => {
      item.style.cssText = "background-color: rgba(128, 121, 128, 1)";
    });
  }
  // убираем/добавляем тень лампы
  let lamp_shadow = e.target.value / 30;
  let lamp_color_1 = e.target.value / 14 + 127;
  let lamp_color_2 = e.target.value / 2.5 + 121;
  lamp.style.cssText = `filter: drop-shadow(25px -21px ${lamp_shadow}px rgba(${lamp_color_1}, ${lamp_color_2}, ${lamp_color_1}, 1));
 `;
  //  изменим цвет фона
  let bg_color_1 = e.target.value / 10 + 128;
  let bg_color_2 = e.target.value / 2 + 121;
  body.style.cssText = `background-color: rgba(${bg_color_1}, ${bg_color_2}, ${bg_color_1}, 1)`;
  //
});

on_off_block.addEventListener("click", function () {
  window.navigator.vibrate(5);
  audio.play();
  if (checkbox.checked) {
    // изменим цвет фона
    body.style.cssText = "background-color: rgba(138, 171, 138, 1)";
    // сделаем значение input range = 100
    range.value = 100;
    // сделаем 100%
    percents.innerText = "100%";
    // вкл лампочку
    light.style.cssText = "box-shadow: 0px 5px 22px 10px";
    // добавим тень
    lamp.style.cssText =
      "filter: drop-shadow(25px -21px 3px rgba(135, 161, 135, 1));";
    //
    decorations.forEach((item) => {
      item.style.cssText = "background-color: rgba(138, 171, 211, 1)";
    });
  } else if (!checkbox.checked) {
    // изменим цвет фона
    body.style.cssText = "background-color: rgba(128, 121, 128, 1);";
    // сделаем значение input range = 0
    range.value = 0;
    // сделаем 0%
    percents.innerText = "0%";
    // откл лампочку
    light.style.cssText = "box-shadow: 0px 0px 2px 0px";
    // удаляем тень
    lamp.style.filter = "drop-shadow(25px -21px 0px rgba(128, 121, 128, 1))";
    //
    decorations.forEach((item) => {
      item.style.cssText = "background-color: rgba(128, 121, 128, 1)";
    });
  }
});
