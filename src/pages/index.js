import "./index.css";
import Api from "../components/Api.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

import {
  initialCards,
  popup,
  editButton,
  addButton,
  avatarButton,
  profileName,
  profileAbout,
  profileAvatar,
  formInputName,
  formInputAbout,
  formProfile,
  formCard,
  formAvatar,
  template,
  cardArea,
  formInputTitle,
  formInputLink,
  cardImage,
  btnDelete,
  popupCloseButtons,
  settings,
  closeProfileForm,
  closeAddCardForm,
  closeImagePopup,
  closeAvatarForm,
  closeConfirmPopup,
} from "../components/Utils.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web_es_11",
  headers: {
    authorization: "bd199941-93ac-4d0c-a4f0-883997cf69e3",
    "Content-Type": "application/json",
  },
});

const confirmPopup = new PopupWithConfirmation("#popup-delete-card", () => {
  api.deleteCard(newCard._id).then(() => {
    newCard.remove();
  });
});
confirmPopup.setEventListeners();
closeConfirmPopup.addEventListener("click", () => {
  confirmPopup.close();
});

function createCard(item) {
  const newCard = new Card(
    item,
    (name, link) => {
      imagePopup.open(name, link);
    },
    user._userId,
    () => {
      confirmPopup.open(item._id);
      confirmPopup.setFormSubmit(() => {
        api.deleteCard(item._id).then(() => {
          confirmPopup.close();
          console.log(newCard);
          newCard.deleteCard();
        });
      });
    },
    () => {
      api.addLike(newCard._id).then((res) => {
        newCard.addLike();
        newCard.updatelikes(res.likes);
      });
    },
    () => {
      api.removeLike(newCard._id).then((res) => {
        newCard.removeLike();
        newCard.updatelikes(res.likes);
      });
    }
  );
  return newCard.generateCard();
}

api.getInitialCards().then((result) => {
  const section = new Section(
    {
      items: result,
      renderer: (item) => {
        const card = createCard(item);
        section.addItem(card);
      },
    },
    ".elements"
  );
  section.renderItems();

  const popupAddCard = new PopupWithForm("#popup-add-card", (inputs) => {
    console.log(inputs);
    api.addCard(inputs).then((result) => {
      const newCard = createCard(result);
      section.addItem(newCard);
    });
  });
  popupAddCard.setEventListeners();
  addButton.addEventListener("click", () => {
    popupAddCard.open();
  });
  closeAddCardForm.addEventListener("click", () => {
    popupAddCard.close();
  });
});

const user = new UserInfo({
  profileName: ".profile__name",
  profileAbout: ".profile__about",
  profileAvatar: ".profile__img",
  userId: "",
});

api.getUserInfo().then((result) => {
  user.setUserInfo(result);
  // console.log(user);
});

const imagePopup = new PopupWithImage("#popup-image");
imagePopup.setEventListeners();
closeImagePopup.addEventListener("click", () => {
  imagePopup.close();
});

const popupProfile = new PopupWithForm("#popup-edit-profile", (inputs) => {
  api.editProfile(inputs).then((result) => {
    user.setUserInfo(result);
  });
});
popupProfile.setEventListeners();
editButton.addEventListener("click", () => {
  popupProfile.open();
  console.log("open");
});
closeProfileForm.addEventListener("click", () => {
  popupProfile.close();
});

// const popupAddCard = new PopupWithForm("#popup-add-card", (inputs) => {
//   const newCard = new Card(inputs.title, inputs.image).generateCard();
//   cardArea.prepend(newCard);
// });

const popupAvatar = new PopupWithForm("#popup-edit-avatar", (inputs) => {
  api.editAvatar(inputs).then((result) => {
    user.setUserInfo(result);
  });
});
popupAvatar.setEventListeners();
avatarButton.addEventListener("click", () => {
  popupAvatar.open();
});
closeAvatarForm.addEventListener("click", () => {
  popupAvatar.close();
});

const formProfileValidation = new FormValidator(formProfile, settings);
formProfileValidation.enableValidation();

const formAddCardValidation = new FormValidator(formCard, settings);
formAddCardValidation.enableValidation();

const formAvatarValidation = new FormValidator(formAvatar, settings);
formAvatarValidation.enableValidation();
