import React from "react";
import {Formik} from "formik";
import {loginValues} from "../../consts/login.const";
import schema from "../../yup/login.yup";
import {LoginForm} from "./components/login.form";
import {inject, observer} from "mobx-react";

export const Login = inject("store")(
  observer(({store: {auth}}) => {
    const onSubmitForm = (values) => {
      auth.login(values);
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
  })
);
