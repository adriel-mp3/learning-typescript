"use strict";
// Dada a estrutura HTML/CSS, crie o script que irá fazer o botão mobile funcionar (ativar/desativar a navegação).
const menuButton = document.querySelector("#btn-mobile");
const navMenu = document.querySelector("#nav");
function toggleMenu(event) {
    const navMenu = document.querySelector("#nav");
    const isMenuActive = navMenu?.classList.contains("active");
    const button = event.currentTarget;
    if (button instanceof HTMLElement && navMenu) {
        navMenu.classList.toggle("active");
        button.setAttribute("aria-expanded", String(isMenuActive));
        button.setAttribute("aria-label", isMenuActive ? "Fechar Menu" : "Abrir Menu");
    }
}
menuButton?.addEventListener("pointerdown", toggleMenu);
