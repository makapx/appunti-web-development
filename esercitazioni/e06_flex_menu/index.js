/**
 * Display or hide the menu on mobile devices
 * @param {*} event 
 * @returns 
 */
const toggleMenu = (event) => {
    if (!(event.target.classList.contains("navbar__menu") ||
        event.target.parentElement.classList.contains("navbar__menu"))) {
        return;
    }

    document.querySelectorAll(".navbar__item").forEach((item) => {
        item.classList.toggle("hide-on-mobile");
    });
};

document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", toggleMenu);
});