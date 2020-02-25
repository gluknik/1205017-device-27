// CONTACT POPUP START

var contactBtn = document.querySelector(".contact-btn");

var contactPopup = document.querySelector(".modal-contact");
var popupClose = contactPopup.querySelector(".modal-close");

var popupName = contactPopup.querySelector("[name=contact-name]");
var email = contactPopup.querySelector("[name=contact-email]");
var message = contactPopup.querySelector("[name=contact-message]");
var form = contactPopup.querySelector("form");

var nameStorage = "";
var emailStorage = "";

if (window.localStorage) {
  var isStorageSupport = true;
  popupName.value = localStorage.getItem("popupName");
  email.value = localStorage.getItem("email");
} else {
  var isStorageSupport = false;
}

contactBtn.addEventListener("click", function(evt) {
    evt.preventDefault();
    contactPopup.classList.add("modal-show");

    if (!popupName.value) {
      contactPopup.querySelector("[name=contact-name]").focus();
    } else if (popupName.value && !email.value) {
      contactPopup.querySelector("[name=contact-email]").focus();
    } else {
      contactPopup.querySelector("[name=contact-message]").focus();
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

// PRODUCT SLIDER START


var productSliderBtn1 = document.querySelector(".slider-bullets-item.slide-1");
var productSliderBtn2 = document.querySelector(".slider-bullets-item.slide-2");
var productSliderBtn3 = document.querySelector(".slider-bullets-item.slide-3");

var productSlide1 = document.querySelector(".slider-item.monopod");
var productSlide2 = document.querySelector(".slider-item.wristband");
var productSlide3 = document.querySelector(".slider-item.quadrocopter");

productSliderBtn1.addEventListener("click", function (evt) {
  productSlide2.classList.remove("active");
  productSlide3.classList.remove("active");
  productSlide1.classList.add("active");

  productSliderBtn2.classList.remove("active");
  productSliderBtn3.classList.remove("active");
  productSliderBtn1.classList.add("active");
});

productSliderBtn2.addEventListener("click", function (evt) {
  productSlide1.classList.remove("active");
  productSlide3.classList.remove("active");
  productSlide2.classList.add("active");

  productSliderBtn3.classList.remove("active");
  productSliderBtn1.classList.remove("active");
  productSliderBtn2.classList.add("active");
});

productSliderBtn3.addEventListener("click", function (evt) {
  productSlide1.classList.remove("active");
  productSlide2.classList.remove("active");
  productSlide3.classList.add("active");

  productSliderBtn2.classList.remove("active");
  productSliderBtn1.classList.remove("active");
  productSliderBtn3.classList.add("active");
});

// PRODUCT SLIDER END

// INFO SLIDER START

var infoSliderBtn1 = document.querySelector(".info-slider-category.slide-1");
var infoSliderBtn2 = document.querySelector(".info-slider-category.slide-2");
var infoSliderBtn3 = document.querySelector(".info-slider-category.slide-3");

var infoSlide1 = document.querySelector(".info-slider-content .slide-1");
var infoSlide2 = document.querySelector(".info-slider-content .slide-2");
var infoSlide3 = document.querySelector(".info-slider-content .slide-3");

infoSliderBtn1.addEventListener("click", function (evt) {
  infoSlide2.classList.remove("active");
  infoSlide3.classList.remove("active");
  infoSlide1.classList.add("active");

  infoSliderBtn2.classList.remove("active");
  infoSliderBtn3.classList.remove("active");
  infoSliderBtn1.classList.add("active");
});

infoSliderBtn2.addEventListener("click", function (evt) {
  infoSlide1.classList.remove("active");
  infoSlide3.classList.remove("active");
  infoSlide2.classList.add("active");

  infoSliderBtn1.classList.remove("active");
  infoSliderBtn3.classList.remove("active");
  infoSliderBtn2.classList.add("active");
});

infoSliderBtn3.addEventListener("click", function (evt) {
  infoSlide1.classList.remove("active");
  infoSlide2.classList.remove("active");
  infoSlide3.classList.add("active");

  infoSliderBtn2.classList.remove("active");
  infoSliderBtn1.classList.remove("active");
  infoSliderBtn3.classList.add("active");
});

// INFO SLIDER END
