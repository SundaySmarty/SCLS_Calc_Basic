function Menu(x) {
    x.classList.toggle("change");
    document.getElementsByClassName("content_container")[0].classList.toggle("visible_content");
    document.getElementsByClassName("menu")[0].classList.toggle("visible_menu");
}

function moveMenu() {
    document.getElementsByClassName("menu")[0].classList.toggle("visible_menu");
    document.getElementsByClassName("content_container")[0].classList.toggle("visible_content");
    document.getElementsByClassName("menu_button")[0].classList.toggle("change");
}