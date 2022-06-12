document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");

  function toggleMenu() {
    menu.addEventListener("click", function (e) {
      console.log("hello world");
    });
  }
  toggleMenu();
});
