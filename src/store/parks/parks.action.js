import axiosInstance from "../../api/api";

export class ParksAction {
  getParks() {
    axiosInstance
      .post("login", {login: "parktestuser", password: "park_test_user"})
      .then((res) => {
        // axiosInstance.get("reference/parks").then((res) => {
        //   console.log(res);
        // });
        console.log(res);
      });
  }
}
