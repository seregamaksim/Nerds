var write = document.querySelector(".button-adress");

var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-close");
var name = popup.querySelector("input[type=text]");

write.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    name.focus();
});
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});