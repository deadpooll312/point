import axiosInstance from "../../api/api";
import {setStorage} from "../../services/storage.service";

export class AuthAction {
  login(data) {
    const body = {
      mode: "raw",
      raw: JSON.stringify(data),
      options: {
        raw: {
          language: "json",
        },
      },
    };
    axiosInstance
      .post("v1/login", body)
      .then(({data}) => {
        this.updateUser(data);
        setStorage("userInfo", data);
        window.location.href = "/";
      })
      .catch();
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
