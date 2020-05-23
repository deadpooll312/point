import axiosInstance from "~/api/api";
import {showError} from "../../services/notifications.service";
import {loginError} from "../../consts/text.const";

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
      .catch(() => showError(loginError));
  }

  logout() {
    axiosInstance.post("logout").then(() => {
      this.user = {};
      localStorage.removeItem("userInfo");
      window.location.href = "/login";
    });
  }

  updateUser(user) {
    this.user = user;
  }
}
