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
