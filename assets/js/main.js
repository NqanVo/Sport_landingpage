const btn_menu = document.querySelector("#btn_menu");
const menu = document.querySelector("#menu");

btn_menu.addEventListener('click', function(){
    menu.classList.toggle("hidden");
})