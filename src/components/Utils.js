import Card from "./Card.js";
import Popup from "./Popup.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";

// import santaMonicaImage from "../images/Santa_Monica_Mountains.jpg";
// import sanDimasImage from "../images/San_Dimas_Canyon.jpg";
// import limestoneImage from "../images/Limestone_Canyon.jpg";
// import baldyImage from "../images/Mt_Baldy.jpg";
// import glendoraImage from "../images/Glendora_mountain_road.jpg";
// import eagleRockImage from "../images/Eagle_rock_Topanga.jpg";

// export const initialCards = [
//   {
//     name: "Santa Monica Mountains",
//     link: santaMonicaImage,
//   },
//   {
//     name: "San Dimas Canyon",
//     link: sanDimasImage,
//   },
//   {
//     name: "Limestone Canyon",
//     link: limestoneImage,
//   },
//   {
//     name: "Mt Baldy",
//     link: baldyImage,
//   },
//   {
//     name: "Glendora Mountain",
//     link: glendoraImage,
//   },
//   {
//     name: "Eagle Rock Topanga",
//     link: eagleRockImage,
//   },
// ];

export const popup = document.querySelector(".popup");
export const editButton = document.querySelector(".profile__edit-button");
export const avatarButton = document.querySelector(".profile__avatar-button");

export const profileName = document.querySelector(".profile__name");
export const profileAbout = document.querySelector(".profile__about");
export const profileAvatar = document.querySelector(".profile__img");

export const formInputName = document.querySelector(
  ".form__input_content_name"
);
export const formInputAbout = document.querySelector(
  ".form__input_content_about"
);
export const formProfile = document.querySelector("#form-profile");
export const addButton = document.querySelector(".profile__add-button");

export const formCard = document.querySelector("#form-add-card");
export const formInputTitle = document.querySelector(
  ".form__input_content_title"
);
export const formInputLink = document.querySelector(
  ".form__input_content_image"
);

export const formAvatar = document.querySelector("#form-avatar");

export const popupCloseButtons = Array.from(
  document.querySelectorAll(".popup__close-btn")
);
export const template = document.querySelector(".template-card");
export const cardArea = document.querySelector(".elements");

export const cardImage = document.querySelector(".element__item");
export const btnDelete = document.querySelector(".element__trash-button");

export const settings = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error",
};

export const closeProfileForm = document.querySelector("#close-profile-form");
export const closeAddCardForm = document.querySelector("#close-card-form");
export const closeImagePopup = document.querySelector("#close-image-popup");
export const closeAvatarForm = document.querySelector("#close-avatar-form");
