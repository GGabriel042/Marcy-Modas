const menuEl = document.getElementById("menu-btn");
const sideMenuEl = document.getElementById("side-menu");
let sideMenuOpen = false;
let menuOpen = false;

menuEl.addEventListener("click", () => {
  if (!menuOpen) {
    menuEl.classList.add("open");
    menuOpen = true;
    sideMenuEl.classList.add("active");
    sideMenuOpen = true;
  } else {
    menuEl.classList.remove("open");
    menuOpen = false;
    sideMenuEl.classList.remove("active");
    sideMenuOpen = false;
  }
})
