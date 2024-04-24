const popup = document.querySelector(".popup");
const buttonEdit = document.querySelector(".profile__edit_button");
const buttonAdd = document.querySelector(".profile__add_button");
const popupProfile = document.querySelector("popup_content_profile");
const popupAddCard = document.querySelector("popup_content_add-card");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const formInputName = document.querySelector(".form__input_content_name");
const formInputAbout = document.querySelector(".form__input_content_about");
const formProfile = document.querySelector("#form-profile");

const popupCloseButtons = Array.from(
  document.querySelectorAll(".popup__close-btn")
);

buttonEdit.addEventListener("click", function () {
  popup.classList.add("popup_open");
});

buttonAdd.addEventListener("click", function () {
  popup.classList.add("popup_open");
});

popupCloseButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const popup = button.closest(".popup");
    popup.classList.remove("popup_open");
  });
});

formProfile.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = formInputName.value;
  profileAbout.textContent = formInputAbout.value;
  popup.classList.remove("popup_open");
});
