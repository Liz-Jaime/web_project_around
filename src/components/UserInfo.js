export default class UserInfo {
  constructor({
    profileName,
    profileAbout,
    profileAvatar,
    userId,
    userName,
    userAbout,
  }) {
    this._profileName = document.querySelector(profileName);
    this._profileAbout = document.querySelector(profileAbout);
    this._profileAvatar = document.querySelector(profileAvatar);
    this._userId = userId;
    this._userName = userName;
    this._userAbout = userAbout;
  }
  getUserId() {
    return this._userId;
  }

  getUserInfo() {
    return {
      profileName: this._profileName.textContent,
      profileAbout: this._profileAbout.textContent,
      profileAvatar: this._profileAvatar.src,
    };
  }
  setUserInfo(data) {
    this._profileName.textContent = data.name;
    this._profileAbout.textContent = data.about;
    this._profileAvatar.src = data.avatar;
    this._userId = data._id;
    this._userName = data.name;
    this._userAbout = data.about;
  }
}
