export class FormValidator {
  constructor(formElement, settings) {
    this._formElement = formElement;
    this._settings = settings;
    this._buttonElement = this._formElement.querySelector(
      this._settings.submitButtonSelector
    );
    this._inputList = Array.from(
      this._formElement.querySelectorAll(settings.inputSelector)
    );
  }

  showInputError(inputElement) {
    this._errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.add(this._settings.inputErrorClass);
    this._errorElement.textContent = inputElement.validationMessage;
  }

  hideInputError(inputElement) {
    this._errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._settings.inputErrorClass);
    this._errorElement.textContent = "";
  }

  checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this.showInputError(inputElement);
    } else {
      this.hideInputError(inputElement);
    }
  }
  hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  toggleButtonState(inputList) {
    if (this.hasInvalidInput(inputList)) {
      this._buttonElement.classList.add(this._settings.inactiveButtonClass);
    } else {
      this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
    }
  }

  setEventListeners() {
    this.toggleButtonState(this._inputList);

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this.checkInputValidity(inputElement);
        this.toggleButtonState(this._inputList);
      });
    });
  }
  enableValidation() {
    this._formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    this.setEventListeners();
  }
}
