var burger = document.querySelector(".burger");
var nav = document.querySelector("ul");

burger.addEventListener("click", function(){
    nav.classList.toggle("view");
})