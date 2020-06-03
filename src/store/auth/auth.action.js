import axiosInstance from "../../api/api";
import {showError} from "../../services/notifications.service";
import {loginError} from "../../consts/text.const";
import {setStorage} from "../../services/storage.service";

export class AuthAction {
  login(data) {
    axiosInstance
      .post("login", data)
      .then(({data}) => {
        this.user = data;
        setStorage("userInfo", data);
        window.location.href = "/";
      })
      .catch(() => showError(loginError));
  }

  logout() {
    axiosInstance.post("logout").then(() => {
      this.user = {};
      localStorage.clear();
      window.location.href = "/#/login";
    });
  }

  updateUser(user) {
    this.user = user;
  }
}
