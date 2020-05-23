import {AuthAction} from "./auth.action";
import {computed, decorate, observable} from "mobx";

class AuthStore extends AuthAction {
  user = {};

  get firstName() {
    return this.user.firstName;
  }
  get id() {
    return this.user.id;
  }

  get lastName() {
    return this.user.lastName;
  }
}

// eslint-disable-next-line no-class-assign
AuthStore = decorate(AuthStore, {
  user: observable,
  firstName: computed,
  id: computed,
  lastName: computed,
});

export default new AuthStore();
