var burger = document.querySelector(".burger");
var nav1 = document.querySelector("ul");

burger.addEventListener("click", function(){
    console.log("Clicked")
    nav1.classList.toggle("view");
})