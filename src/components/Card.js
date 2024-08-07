import { template } from "./Utils.js";

export default class Card {
  constructor(
    data,
    handleCardClick,
    userId,
    handleDeleteCard,
    handleAddLike,
    handleRemoveLike
  ) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this.owner = data.owner;
    this.userId = userId;
    this.likes = data.likes;
    this._card = this.getTemplate();
    this._handleAddLike = handleAddLike;
    this._handleRemoveLike = handleRemoveLike;
  }
  getTemplate() {
    return template.cloneNode(true).content.querySelector(".element");
  }

  setProperties() {
    this._cardImage = this._card.querySelector(".element__item");
    this._cardTitle = this._card.querySelector(".element__caption");
    this._btnDelete = this._card.querySelector(".element__trash-button");

    if (this.owner._id !== this.userId) {
      this._btnDelete.remove();
    }
    this._btnLike = this._card.querySelector(".element__like");
    this.likesCounter = this._card.querySelector(".element__like-number");
    this.likesCounter.textContent = this.likes.length;
    const hasUserLiked = this.likes.some((like) => like._id === this.userId);
    if (hasUserLiked) {
      this.addLike();
    }
    this._cardImage.src = this._link;
    this._cardTitle.textContent = this._name;
  }

  updatelikes(likes) {
    this.likesCounter.textContent = likes.length;
  }
  addLike() {
    this._btnLike.classList.add("element__like-active");
  }
  removeLike() {
    this._btnLike.classList.remove("element__like-active");
  }

  deleteCard() {
    this._card.remove();
  }

  setEventListeners() {
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });

    this._btnLike.addEventListener("click", () => {
      const hasUserLiked = this.likes.some((like) => like._id === this.userId);

      if (hasUserLiked) {
        this._handleRemoveLike(this._id);
        this._btnLike.classList.add("element__like-active");
      } else {
        this._handleAddLike(this._id);
      }
    });

    if (this.owner._id === this.userId) {
      this._btnDelete.addEventListener("click", () => {
        this._handleDeleteCard();
      });
    }
  }
  generateCard() {
    this.setProperties();
    this.setEventListeners();
    return this._card;
  }
}
