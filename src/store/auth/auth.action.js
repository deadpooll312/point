import axiosInstance from "../../api/api";

export class AuthAction {
  login(data) {
    axiosInstance.post("login", data).then((res) => {
      console.log(res);
    });
  }
}
