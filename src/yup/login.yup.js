import * as yup from "yup";

let schema = yup.object().shape({
  login: yup.string().required("Введите логин"),
  password: yup.string().required("Введите пароль"),
});

export default schema;
