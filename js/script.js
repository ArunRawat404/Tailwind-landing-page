const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const menuItems = document.querySelectorAll(".menu a")

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
});