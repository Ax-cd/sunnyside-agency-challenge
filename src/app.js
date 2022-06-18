document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".toggle");
  const menu = document.querySelector(".menu");
  const corner = document.querySelector(".menu-corner");
  const h1 = document.querySelector(".h1");
  const arrow = document.querySelector(".arrow");

  function toggleMenu() {
    toggleBtn.addEventListener("click", function (e) {
      menu.classList.toggle("hide-menu");
      corner.classList.toggle("hide-menu");
      if (menu.classList.contains("hide-menu")) {
        //hide menu
        h1.style.opacity = 1;
        arrow.style.opacity = 1;
      } else {
        //display menu
        h1.style.opacity = 0;
        arrow.style.opacity = 0;
      }
    });
  }
  toggleMenu();
});
