import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._confirmButton = this._popupElement.querySelector(
      ".popup__confirm-button"
    );
  }

  setFormSubmit(formSubmit) {
    this._handleFormSubmit = formSubmit;
  }

  open(cardId) {
    super.open();
    this._cardId = cardId;
  }

  setEventListeners() {
    super.setEventListeners();
    this._confirmButton.addEventListener("click", (evt) => {
      evt.preventDefault();

      this._handleFormSubmit(this._cardId);
      super.close();
    });
  }
}
