const hamburger_button = document.getElementById("hamburger");

hamburger_button.addEventListener("click", toggle_navigation);

function toggle_navigation() {
    const nav_menu = document.getElementById("nav-links");
    const hamburger_open_character = document.getElementById("open-hamburger");
    const hamburger_close_character = document.getElementById("close-hamburger");

    if (nav_menu.style.display === "none") {
        nav_menu.style.display = "flex";
        hamburger_open_character.style.display = "none";
        hamburger_close_character.style.display = "inline-block";
    } else {
        nav_menu.style.display = "none";
        hamburger_open_character.style.display = "inline-block";
        hamburger_close_character.style.display = "none";
    }
}