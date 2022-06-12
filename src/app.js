document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".toggle");
  const menu = document.querySelector(".menu");

  function toggleMenu() {
    toggleBtn.addEventListener("click", function (e) {
      if (menu.style.visibility === "hidden") {
        menu.style.visibility = "visible"; //display menu
      } else {
        menu.style.visibility = "hidden"; //hide menu
      }
    });
  }
  toggleMenu();
});
