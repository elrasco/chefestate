import { observable, action } from 'mobx';

import { Auth } from 'aws-amplify';

import { api } from '../services';

class AuthStore {
  @observable
  inProgress = false;
  @observable
  errors = undefined;
  @observable
  justLoggedIn = false;
  @observable
  newPasswordRequired = false;
  @observable
  resetPasswordRequired = false;
  @observable
  isLoggedIn;
  @observable
  token;
  @observable
  user;

  @action
  login({ username, password }) {
    this.inProgress = true;
    this.errors = undefined;
    return api('login', username, password)
      .then(user => {
        console.log(user);
        this.newPasswordRequired = 'NEW_PASSWORD_REQUIRED' === user.challengeName;
      })
      .catch(
        action(err => {
          this.resetPasswordRequired = err.code === 'PasswordResetRequiredException';
          this.errors = [err];
          throw err;
        })
      )
      .then(
        action(() => {
          this.inProgress = false;
          this.justLoggedIn = true;
        })
      );
  }

  @action
  completeNewPassword({ newPassword }) {
    this.inProgress = true;
    this.errors = undefined;
    return api('completeNewPassword', this.user, newPassword)
      .then(() => {
        this.newPasswordRequired = false;
      })
      .catch(
        action(err => {
          this.errors = [err];
          throw err;
        })
      )
      .then(
        action(() => {
          this.inProgress = false;
          this.justLoggedIn = true;
        })
      );
  }

  @action
  setJustLoggedIn(trueOrFalse) {
    this.justLoggedIn = trueOrFalse;
  }

  @action
  logout() {
    this.setIsLoggedIn(false);
    return Auth.signOut();
  }

  @action
  setIsLoggedIn(isLoggedIn) {
    this.isLoggedIn = isLoggedIn;
  }

  @action
  setToken(token) {
    this.token = token;
  }

  @action
  setUser(user) {
    this.user = user;
  }

  checkSession() {
    return Auth.currentSession()
      .then(() => this.setIsLoggedIn(true))
      .catch(err => {
        console.warn(err);
        this.setIsLoggedIn(true);
      });
  }
}

export default new AuthStore();
