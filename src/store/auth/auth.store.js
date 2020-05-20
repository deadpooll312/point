import {AuthAction} from "./auth.action";
import {decorate, observable} from "mobx";

export class AuthStore extends AuthAction {
  user = null;
}

// eslint-disable-next-line no-class-assign
AuthStore = decorate(AuthStore, {
  user: observable,
});

export default new AuthStore();
