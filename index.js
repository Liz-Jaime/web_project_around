const popup = document.querySelector(".popup");
const editButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector("#popup-edit-profile");

const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const formInputName = document.querySelector(".form__input_content_name");
const formInputAbout = document.querySelector(".form__input_content_about");
const formProfile = document.querySelector("#form-profile");

const addButton = document.querySelector(".profile__add-button");
const popupAddCard = document.querySelector("#popup-add-card");
const formCard = document.querySelector("#form-add-card");
const formInputTitle = document.querySelector(".form__input_content_title");
const formInputLink = document.querySelector(".form__input_content_image");

const popupCloseButtons = Array.from(
  document.querySelectorAll(".popup__close-btn")
);
const template = document.querySelector(".template-card");
const cardArea = document.querySelector(".elements");
console.log(template);
const initialCards = [
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
const imagePopup = document.querySelector("#popup-image");

editButton.addEventListener("click", function () {
  popupProfile.classList.add("popup_open");
});

addButton.addEventListener("click", function () {
  popupAddCard.classList.add("popup_open");
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

formCard.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const cardToAdd = cardCreator(formInputTitle.value, formInputLink.value);
  cardArea.prepend(cardToAdd);
  popupAddCard.classList.remove("popup_open");
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
    imagePopup.querySelector(".popup__image").src = link;
    imagePopup.querySelector(".popup__image-title").textContent = name;
  });
  return card;
}

initialCards.forEach(function (element) {
  const newCard = cardCreator(element.name, element.link);
  cardArea.append(newCard);
});
