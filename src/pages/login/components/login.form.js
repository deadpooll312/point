import React, {useState} from "react";
import {inject, observer} from "mobx-react";
import {Form} from "formik";
import {FieldInput} from "../../../components/FieldInput";
import Button from "../../../components/Button";
import {Link} from "react-router-dom";

export const LoginForm = inject("store")(
  observer(({store: {auth}}) => {
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
          <Button type="submit" name="Далее" addClass="login-form-container__button" />
          <Link to="/" className="login-form-container__support">
            Обратиться в службу поддержки
          </Link>
        </Form>
      </div>
    );
  })
);
