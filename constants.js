const kinds = [
  {
    img: "./assets/01.png",
    city: "Rostov-on-Don LCD admiral",
    time: "3.5 months",
    area: "81 m2",
  },
  {
    img: "./assets/02.png",
    city: "Sochi Thieves",
    time: "4 months",
    area: "105 m2",
  },
  {
    img: "./assets/03.png",
    city: "Rostov-on-Don Patriotic",
    time: "3 months",
    area: "93 m2",
  },
];

const firstPoint = document.querySelector(".first");
const backArrow = document.querySelector(".main__second-arrows-back");
const nextArrow = document.querySelector(".main__second-arrows-next");
let currentIndex = 0;
const circles = document.querySelectorAll(".first, .second, .third");
const cities = document.querySelectorAll(
  ".first-city, .second-city, .third-city"
);
const city = document.querySelector(".city");
const time = document.querySelector(".time");
const area = document.querySelector(".area");
const image = document.querySelector(".main__second-example-image");
const links = document.querySelectorAll(".main__second-example-links li");
