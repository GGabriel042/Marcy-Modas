const menuEl = document.getElementById("menu-btn");
let menuOpen = false;

menuEl.addEventListener("click", () => {
  if (!menuOpen) {
    menuEl.classList.add("open");
    menuOpen = true;
  } else {
    menuEl.classList.remove("open");
    menuOpen = false;
  }
})
