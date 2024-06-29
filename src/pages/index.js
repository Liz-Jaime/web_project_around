import "./index.css";

import Card from "../components/Card.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import {
  initialCards,
  popup,
  editButton,
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
  cardImage,
  popupCloseButtons,
  settings,
  closeProfileForm,
  closeAddCardForm,
  closeImagePopup,
} from "../components/Utils.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";

const imagePopup = new PopupWithImage("#popup-image");
imagePopup.setEventListeners();

const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const newCard = new Card(item.name, item.link, (name, link) => {
        imagePopup.open(name, link);
      }).generateCard();
      section.addItem(newCard);
    },
  },
  ".elements"
);
section.renderItems();

const formProfileValidation = new FormValidator(formProfile, settings);
formProfileValidation.enableValidation();

const formAddCardValidation = new FormValidator(formCard, settings);
formAddCardValidation.enableValidation();

const userInfo = new UserInfo({
  profileName: ".profile__name",
  profileAbout: ".profile__about",
});

const popupProfile = new PopupWithForm("#popup-edit-profile", (inputs) => {
  userInfo.setUserInfo(inputs);
});

const popupAddCard = new PopupWithForm("#popup-add-card", (inputs) => {
  const newCard = new Card(inputs.title, inputs.image).generateCard();
  cardArea.prepend(newCard);
});

popupProfile.setEventListeners();
popupAddCard.setEventListeners();

editButton.addEventListener("click", () => {
  popupProfile.open();
});

addButton.addEventListener("click", () => {
  popupAddCard.open();
});

closeProfileForm.addEventListener("click", () => {
  popupProfile.close();
});
closeAddCardForm.addEventListener("click", () => {
  popupAddCard.close();
});
closeImagePopup.addEventListener("click", () => {
  imagePopup.close();
});
