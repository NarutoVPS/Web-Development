var burger = document.querySelector(".burger");
var nav1 = document.querySelector("ul");

burger.addEventListener("click", function(){
    nav1.classList.toggle("view");
})