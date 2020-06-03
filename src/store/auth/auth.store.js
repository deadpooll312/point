import {AuthAction} from "./auth.action";
import {computed, decorate, observable} from "mobx";

class AuthStore extends AuthAction {
  user = {};
  get firstName() {
    return this.user.userInfo && this.user.userInfo.firstName;
  }
  get id() {
    return this.user.userInfo && this.user.userInfo.id;
  }

  get lastName() {
    return this.user.userInfo && this.user.userInfo.lastName;
  }

  get authRole() {
    return this.user.authorities && this.user.authorities[0].authority;
  }
}

// eslint-disable-next-line no-class-assign
AuthStore = decorate(AuthStore, {
  user: observable,
  firstName: computed,
  id: computed,
  lastName: computed,
  authRole: computed,
});

export default new AuthStore();
