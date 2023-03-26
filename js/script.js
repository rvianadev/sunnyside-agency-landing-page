let hamburger = document.getElementById("hamburger-menu");

hamburger.addEventListener("click", function () {
  console.log("Hamburger clicado!");
  let menu = document.querySelector(".menu-toggle");
  menu.classList.toggle("show");
});
