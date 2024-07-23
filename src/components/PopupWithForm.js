import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._formElement = this._popupElement.querySelector(".form");
    this._inputList = this._formElement.querySelectorAll(".form__input");
    this._handleFormSubmit = handleFormSubmit;
    this._formButton = this._popupElement.querySelector(".form__button");
  }

  getInputValues() {
    this.formValues = {};
    this._inputList.forEach((input) => {
      this.formValues[input.name] = input.value;
    });
    return this.formValues;
  }

  close() {
    super.close();
    this._formElement.reset();
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._formButton.textContent = "Guardando...";
      this._handleFormSubmit(this.getInputValues());
      this._formButton.textContent = "Guardar";
      super.close();
    });
  }
}
