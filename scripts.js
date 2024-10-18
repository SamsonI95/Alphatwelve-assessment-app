// sidebar toggle
let btnToggle = document.querySelector("#collapse");
let sidenav = document.querySelector(".sidenav");

btnToggle.addEventListener("click", function () {
  sidenav.classList.toggle("active");
  console.log("collapse toggle clicked");
});

// dark mode toggle switch
const darkModeToggle = document.getElementById("dark-mode-toggle");

// Check if the user has a saved preference in localStorage
const currentMode = localStorage.getItem("mode");

if (currentMode === "dark") {
  document.documentElement.classList.add("dark-mode");
  darkModeToggle.checked = true; // Update toggle state
}

darkModeToggle.addEventListener("change", function () {
  if (darkModeToggle.checked) {
    document.documentElement.classList.add("dark-mode");
    localStorage.setItem("mode", "dark"); // Save dark mode in localStorage
  } else {
    document.documentElement.classList.remove("dark-mode");
    localStorage.setItem("mode", "light"); // Save light mode in localStorage
  }
});

//carousel
document.addEventListener("DOMContentLoaded", () => {
  const carouselSlider = document.querySelector(".carosuel-slider");
  const carouselCards = document.querySelectorAll(".carosuel-slider section");
  const leftArrow = document.querySelector(".carrow-left");
  const rightArrow = document.querySelector(".carrow-right");
  const dashes = document.querySelectorAll(".carousel-dashes li");

  let currentIndex = 0;
  //auto slide for the carousel
  let autoSlideInterval;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselSlider.style.transform = `translateX(${offset}%)`;
    dashes.forEach((dash, index) => {
      dash.classList.toggle("selected", index === currentIndex);
    });
  }

  leftArrow.addEventListener("click", () => {
    currentIndex =
      currentIndex === 0 ? carouselCards.length - 1 : currentIndex - 1;
    updateCarousel();
  });

  rightArrow.addEventListener("click", () => {
    currentIndex =
      currentIndex === carouselCards.length - 1 ? 0 : currentIndex + 1;
    updateCarousel();
    startAutoSlide();
  });

  dashes.forEach((dash, index) => {
    dash.addEventListener("click", () => {
      currentIndex = index; // Set the current slide based on the clicked dash
      updateCarousel();
      startAutoSlide();
    });
  });

  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      if (currentIndex < carouselCards.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      updateCarousel();
    }, 3000); // Change slide every 3 seconds
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }
});
