import Card from "./Card.js";
import {
  initialCards,
  popup,
  editButton,
  popupProfile,
  popupAddCard,
  addButton,
  profileName,
  profileAbout,
  formInputName,
  formInputAbout,
  formProfile,
  formCard,
  template,
  cardArea,
  formInputTitle,
  formInputLink,
  imagePopup,
  cardImage,
  popupCloseButtons,
  settings,
} from "./Utils.js";
import { FormValidator } from "./FormValidator.js";

const formProfileValidation = new FormValidator(formProfile, settings);
formProfileValidation.enableValidation();

const formAddCardValidation = new FormValidator(formCard, settings);
formAddCardValidation.enableValidation();

editButton.addEventListener("click", function () {
  popupProfile.classList.add("popup_open");
  document.addEventListener("keydown", closePopupEsc);
});

addButton.addEventListener("click", function () {
  popupAddCard.classList.add("popup_open");
  document.addEventListener("keydown", closePopupEsc);
});

popupCloseButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const popup = button.closest(".popup");
    popup.classList.remove("popup_open");
    document.removeEventListener("keydown", closePopupEsc);
  });
});

formProfile.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (formInputName.value === "") {
    return false;
  }
  if (formInputAbout.value === "") {
    return false;
  }
  profileName.textContent = formInputName.value;
  profileAbout.textContent = formInputAbout.value;
  popup.classList.remove("popup_open");
  document.removeEventListener("keydown", closePopupEsc);
});

formCard.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (formInputTitle.value === "") {
    return false;
  }
  if (formInputLink.value === "") {
    return false;
  }
  const cardToAdd = cardCreator(formInputTitle.value, formInputLink.value);
  cardArea.prepend(cardToAdd);
  popupAddCard.classList.remove("popup_open");
  document.removeEventListener("keydown", closePopupEsc);
});

function cardCreator(name, link) {
  const card = template.cloneNode(true).content.querySelector(".element");
  const cardImage = card.querySelector(".element__item");
  const cardTitle = card.querySelector(".element__caption");
  const btnDelete = card.querySelector(".element__trash-button");
  const btnLike = card.querySelector(".element__like");

  btnLike.addEventListener("click", function () {
    btnLike.classList.toggle("element__like-active");
  });
  btnDelete.addEventListener("click", function () {
    card.remove();
  });
  cardImage.src = link;
  cardTitle.textContent = name;
  cardImage.alt = name;

  cardImage.addEventListener("click", () => {
    imagePopup.classList.add("popup_open");
    document.addEventListener("keydown", closePopupEsc);
    imagePopup.querySelector(".popup__image").src = link;
    imagePopup.querySelector(".popup__image-title").textContent = name;
  });
  return card;
}

initialCards.forEach(function (element) {
  const newCard = cardCreator(element.name, element.link);
  cardArea.append(newCard);
});

function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    popupProfile.classList.remove("popup_open");
    popupAddCard.classList.remove("popup_open");
    imagePopup.classList.remove("popup_open");
  }
}

function closePopupClickOutside(evt) {
  if (evt.target.classList.contains("popup__overlay")) {
    popupProfile.classList.remove("popup_open");
    popupAddCard.classList.remove("popup_open");
    imagePopup.classList.remove("popup_open");
  }
}
popupProfile.addEventListener("click", closePopupClickOutside);
popupAddCard.addEventListener("click", closePopupClickOutside);
imagePopup.addEventListener("click", closePopupClickOutside);
