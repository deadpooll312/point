import axiosInstance from "~/api/api";
import {showError} from "../../services/notifications.service";

export class AuthAction {
  login(data) {
    axiosInstance
      .post("login", data)
      .then(({data}) => data.userInfo)
      .then((user) => {
        this.user = user;
        localStorage.setItem("userInfo", JSON.stringify(user));
        window.location.href = "/";
      })
      .catch(() => showError("Логин или пароль не верны"));
  }

  updateUser(user) {
    this.user = user;
  }
}
