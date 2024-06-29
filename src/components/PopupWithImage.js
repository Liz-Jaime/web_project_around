import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageElement = document.querySelector(".popup__image");
    this._captionElement = document.querySelector(".popup__image-title");
  }
  open(name, link) {
    super.open();
    this._imageElement.src = link;
    this._captionElement.textContent = name;
  }
}
