import Card from "./Card.js";

export const initialCards = [
  {
    name: "Eagle Rock Topanga",
    link: "./images/Eagle_rock_Topanga.jpg",
  },
  {
    name: "Glendora Mountain",
    link: "./images/Glendora_mountain_road.jpg",
  },
  {
    name: "Mt Baldy",
    link: "./images/Mt_Baldy.jpg",
  },
  {
    name: "Limestone Canyon",
    link: "./images/Limestone_Canyon.jpg",
  },
  {
    name: "San Dimas Canyon",
    link: "./images/San_Dimas_Canyon.jpg",
  },
  {
    name: "Santa Monica Mountains",
    link: "./images/Santa_Monica_Mountains.jpg",
  },
];
export const popup = document.querySelector(".popup");
export const editButton = document.querySelector(".profile__edit-button");
export const popupProfile = document.querySelector("#popup-edit-profile");

export const profileName = document.querySelector(".profile__name");
export const profileAbout = document.querySelector(".profile__about");
export const formInputName = document.querySelector(
  ".form__input_content_name"
);
export const formInputAbout = document.querySelector(
  ".form__input_content_about"
);
export const formProfile = document.querySelector("#form-profile");
export const addButton = document.querySelector(".profile__add-button");
export const popupAddCard = document.querySelector("#popup-add-card");
export const formCard = document.querySelector("#form-add-card");
export const formInputTitle = document.querySelector(
  ".form__input_content_title"
);
export const formInputLink = document.querySelector(
  ".form__input_content_image"
);
export const popupCloseButtons = Array.from(
  document.querySelectorAll(".popup__close-btn")
);
export const template = document.querySelector(".template-card");
export const cardArea = document.querySelector(".elements");

export const imagePopup = document.querySelector("#popup-image");
export const cardImage = document.querySelector(".element__item");

export const settings = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error",
};
