const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  let scrollY = window.scrollY;

  if (scrollY > 80 && scrollY < 640) {
    header.style.transform = "translateY(-100%)"; // Slide Up
    header.classList.remove("scrolled");
  } else if (scrollY >= 640) {
    header.style.transform = "translateY(0)"; // Slide Down
    header.classList.add("scrolled");
  } else {
    header.style.transform = "translateY(0)";
    header.classList.remove("scrolled");
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("mobile-menu");
  const navList = document.querySelector(".navbar ul");

  menuToggle.addEventListener("click", function () {
    navList.classList.toggle("active"); // Ensure consistency
  });
});

function closeMenu() {
  const navList = document.querySelector(".navbar ul");
  navList.classList.remove("active"); // Match the class used in toggle
}

