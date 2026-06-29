const hamburger_button = document.getElementById("hamburger");

if (hamburger_button) {
    hamburger_button.addEventListener("click", toggle_navigation);
}

function toggle_navigation() {
    const nav_menu = document.getElementById("nav-links");
    const hamburger_open_character = document.getElementById("open-hamburger");
    const hamburger_close_character = document.getElementById("close-hamburger");

    if (!nav_menu || !hamburger_open_character || !hamburger_close_character) {
        return;
    }

    const is_hidden = window.getComputedStyle(nav_menu).display === "none";

    nav_menu.style.display = is_hidden ? "flex" : "none";
    hamburger_open_character.style.display = is_hidden ? "none" : "inline-block";
    hamburger_close_character.style.display = is_hidden ? "inline-block" : "none";
}