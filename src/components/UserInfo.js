export default class UserInfo {
  constructor({ profileName, profileAbout }) {
    this._profileName = document.querySelector(profileName);
    this._profileAbout = document.querySelector(profileAbout);
  }

  getUserInfo() {
    return {
      profileName: this._profileName.textContent,
      profileAbout: this._profileAbout.textContent,
    };
  }
  setUserInfo(data) {
    this._profileName.textContent = data.name;
    this._profileAbout.textContent = data.about;
  }
}
