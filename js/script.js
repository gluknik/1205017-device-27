// CONTACT POPUP START

var contactBtn = document.querySelector(".contact-btn");

var contactPopup = document.querySelector(".modal-contact");
var popupClose = contactPopup.querySelector(".modal-close");

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

contactBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    contactPopup.classList.add("modal-show");

    if (nameStorage && emailStorage) {
      popupName.value = nameStorage;
      email.value = emailStorage;
      contactPopup.querySelector("[name=contact-message]").focus();
    } else if (nameStorage && !emailStorage) {
      popupName.value = nameStorage;
      contactPopup.querySelector("[name=contact-email]").focus();
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
    if (!popupName.value || !email.value || !message.value) {
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
      if(contactPopup.classList.contains("modal-show")) {
        contactPopup.classList.remove("modal-show");
        contactPopup.classList.remove("modal-error");
      }
    }
});

// CONTACT POPUP END

// MAP POPUP START

var mapBtn = document.querySelector(".modal-map-btn");

var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});

// MAP POPUP END
