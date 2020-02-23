var contactLink = document.querySelector(".contact-btn");

var contactPopup = document.querySelector(".modal-contact");
var popupClose = document.querySelector(".modal-close");

var name = contactPopup.querySelector("[name=contact-name]");
var email = contactPopup.querySelector("[name=contact-email]");
var message = contactPopup.querySelector("[name=contact-message]");
var form = contactPopup.querySelector("form");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("name");
} catch (err) {
    isStorageSupport = false;
}

contactLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    contactPopup.classList.add("modal-show");

    if (storage) {
      name.value = storage;
      contactPopup.querySelector("[name=contact-email]").focus();
    } else {
      contactPopup.querySelector("[name=contact-name]").focus();
      // не понимаю почему name.focus() не сработал
    }
});

popupClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    contactPopup.classList.remove("modal-show");
    contactPopup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    evt.preventDefault();
});

form.addEventListener("submit", function (evt) {
    if (!name.value || !email.value || !message.value) {
      console.log("name = " + name.value);
      console.log("email = " + email.value);
      console.log("message = " + message.value);
      evt.preventDefault();
      contactPopup.classList.remove("modal-error");
      contactPopup.offsetWidth = contactPopup.offsetWidth;
      contactPopup.classList.add("modal-error");
      console.log("Необходимо заполнить все поля формы");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("name", name.value);
      }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if(document.querySelector(".modal-contact").classList.contains("modal-show")) {
        // тут в условии я пытался обратиться к contactPopup вместо document.querySelector(".modal-contact"), но получил ошибку в консоли.        contactPopup.classList.remove("modal-show");
        contactPopup.classList.remove("modal-error");
      }
    }
});
