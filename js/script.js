var contactLink = document.querySelector(".contact-btn");

var contactPopup = document.querySelector(".modal-contact");
var popupClose = document.querySelector(".modal-close");

var popupName = contactPopup.querySelector("[name=contact-name]");
var email = contactPopup.querySelector("[name=contact-email]");
var message = contactPopup.querySelector("[name=contact-message]");
var form = contactPopup.querySelector("form");

var isStorageSupport = true;
var nameStorage = "";
var emailStorage = "";

try {
    nameStorage = localStorage.getItem("popupName");
} catch (err) {
    isStorageSupport = false;
}

contactLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    contactPopup.classList.add("modal-show");

    if (nameStorage && emailStorage) {
      popupName.value = nameStorage;
      email.value = emailStorage;
      contactPopup.querySelector("[name=contact-message]").focus();
    } else if (nameStorage && !emailStorage) {
      popupName.value = nameStorage;
      contactPopup.querySelector("[name=contact-email]").focus();
      // не понимаю почему popupName.focus() не сработал
    } else {
      contactPopup.querySelector("[name=contact-name]").focus();
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
    if (!popupName.value || !email.value || !message.value) {
      console.log("name = " + popupName.value);
      console.log("email = " + email.value);
      console.log("message = " + message.value);
      evt.preventDefault();
      contactPopup.classList.remove("modal-error");
      contactPopup.offsetWidth = contactPopup.offsetWidth;
      contactPopup.classList.add("modal-error");
      console.log("Необходимо заполнить все поля формы");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("popupName", popupName.value);
        localStorage.setItem("email", email.value);
      }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if(document.querySelector(".modal-contact").classList.contains("modal-show")) {
        // тут в условии я пытался обратиться к contactPopup вместо document.querySelector(".modal-contact"), но получил ошибку в консоли.
        contactPopup.classList.remove("modal-show");
        contactPopup.classList.remove("modal-error");
      }
    }
});
