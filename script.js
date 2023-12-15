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

// Add click event listeners to each link

const displayInfo = (index) => {
  currentIndex = (index + kinds.length) % kinds.length;
  city.innerText = kinds[currentIndex].city;
  time.innerText = kinds[currentIndex].time;
  area.innerText = kinds[currentIndex].area;
  image.querySelector("img").src = kinds[currentIndex].img;

  circles.forEach((circle) => {
    circle.classList.remove("active");
  });
  circles[currentIndex].classList.add("active");

  cities.forEach((city) => {
    city.classList.remove("active");
  });
  cities[currentIndex].classList.add("active");
};
links.forEach((link, index) => {
  link.addEventListener("click", () => {
    links.forEach((l) => {
      l.classList.remove("active");
    });
    link.classList.add("active");

    image.querySelector("img").src = kinds[index].img;
    currentIndex = index;

    displayInfo(currentIndex);
  });
});
circles.forEach((circle, index) => {
  circle.addEventListener("click", () => {
    circles.forEach((c) => {
      c.classList.remove("active");
    });
    circle.classList.add("active");

    image.querySelector("img").src = kinds[index].img;
    currentIndex = index;

    displayInfo(currentIndex);
  });
});
backArrow.addEventListener("click", () => {
  displayInfo(currentIndex - 1);
  circles[currentIndex - 1].classList.remove("active");
  circles[currentIndex].classList.add("active");
  cities[currentIndex - 1].classList.remove("active");
  cities[currentIndex].classList.add("active");
});

nextArrow.addEventListener("click", () => {
  displayInfo(currentIndex + 1);
  circles[currentIndex - 1].classList.remove("active");
  circles[currentIndex].classList.add("active");
  cities[currentIndex - 1].classList.remove("active");
  cities[currentIndex].classList.add("active");
});

displayInfo(currentIndex);
