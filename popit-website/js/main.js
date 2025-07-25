document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const navList = document.querySelector(".header__nav");

  if (burger && navList) {
    burger.addEventListener("click", () => {
      navList.classList.toggle("nav__list--active");
      burger.setAttribute(
        "aria-expanded",
        navList.classList.contains("nav__list--active")
      );
    });

    // Cerrar menú con Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navList.classList.contains("nav__list--active")) {
        navList.classList.remove("nav__list--active");
        burger.setAttribute("aria-expanded", "false");
      }
    });
  }
});