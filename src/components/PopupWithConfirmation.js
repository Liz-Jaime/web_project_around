import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._confirmButton = this._popup.querySelector(".popup__confirm-button");
  }

  // handleDeleteCard() {
  //   this._card.classList.add("#popup-delete-card");
  // }

  setEventListeners() {
    super.setEventListeners();
    this._confirmButton.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(handleDeleteCard());
      super.close();
    });
  }
}
