import { template } from "./Utils.js";

export default class Card {
  constructor(name, link, handleCardClick) {
    this._name = name;
    this._link = link;
    this._handleCardClick = handleCardClick;
    this._card = this.getTemplate();
  }
  getTemplate() {
    return template.cloneNode(true).content.querySelector(".element");
  }
  setProperties() {
    this._cardImage = this._card.querySelector(".element__item");
    this._cardTitle = this._card.querySelector(".element__caption");
    this._btnDelete = this._card.querySelector(".element__trash-button");
    this._btnLike = this._card.querySelector(".element__like");
    this._cardImage.src = this._link;
    this._cardTitle.textContent = this._name;
  }

  handleLike() {
    this._btnLike.classList.toggle("element__like-active");
  }

  handleDelete() {
    this._card.remove();
  }

  setEventListeners() {
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });

    this._btnLike.addEventListener("click", () => {
      this.handleLike();
    });
    this._btnDelete.addEventListener("click", () => {
      this.handleDelete();
    });
  }
  generateCard() {
    this.setProperties();
    this.setEventListeners();
    return this._card;
  }
}
