import React from "react";
import {Form} from "formik";
import {FieldInput} from "../../../components/FieldInput";
import Button from "../../../components/Button";
import {Link} from "react-router-dom";

export const LoginForm = () => {
  return (
    <div className="login-form-container">
      <Form className="settings-form">
        <FieldInput
          type="text"
          name="login"
          placeholder={"login"}
          errorName="login"
          addClass="login-form-container__input"
        />
        <FieldInput
          type="password"
          name="password"
          placeholder={"password"}
          errorName="password"
          addClass="login-form-container__input"
        />
        <span className="login-form-container__error-text">
          Неверный логин или пароль
        </span>
        <Button type="submit" name="Далее" addClass="login-form-container__button" />
        <Link to="/" className="login-form-container__support">
          Обратиться в службу поддержки
        </Link>
      </Form>
    </div>
  );
};
