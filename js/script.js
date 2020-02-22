var contactLink = document.querySelector(".contact-btn");

var contactPopup = document.querySelector(".modal-contact");
var popupClose = document.querySelector(".modal-close");

var name = contactPopup.querySelector("[name=name]");
var email = contactPopup.querySelector("[name=email]");
var message = contactPopup.querySelector("[name=message]");
var form = contactPopup.querySelector("form");

contactLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    contactPopup.classList.add("modal-show");
    name.focus();
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    contactPopup.classList.remove("modal-show");
    contactPopup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    evt.preventDefault();
});

form.addEventListener("submit", function (evt) {
    if (!name.value || !email.value || !message.value) {
      evt.preventDefault();
      contactPopup.classList.remove("modal-error");
      contactPopup.offsetWidth = contactPopup.offsetWidth;
      contactPopup.classList.add("modal-error");
      console.log("Необходимо заполнить все поля формы");
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (сontactPopup.classList.contains("modal-show")) {
        contactPopup.classList.remove("modal-show");
        contactPopup.classList.remove("modal-error");
      }
    }
});
