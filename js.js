const menuBtn = document.querySelector("#menu-btn");
const mobileMenu = document.querySelector("#mobile-menu");

menuBtn.addEventListener("click", () => {

  mobileMenu.classList.toggle("hidden");

  const isOpen = !mobileMenu.classList.contains("hidden");

  menuBtn.setAttribute("aria-expanded", isOpen);

  menuBtn.textContent = isOpen ? "✕" : "☰";

});