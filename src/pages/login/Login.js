import React from "react";
import {Formik} from "formik";
import {loginValues} from "../../consts/login.const";
import schema from "../../yup/login.yup";
import {LoginForm} from "./components/login.form";

export const Login = () => {
  const onSubmitForm = (values) => {
    console.log(values);
  };

  return (
    <div className="login-form-wrap-container">
      <div className="login">
        <h4 className="login__title">Для входа введите Ваши логин и пароль</h4>
        <Formik
          initialValues={loginValues}
          validationSchema={schema}
          onSubmit={onSubmitForm}
        >
          <LoginForm />
        </Formik>
      </div>
    </div>
  );
};
