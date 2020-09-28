import React from "react";
import {inject, observer} from "mobx-react";
import {Form} from "formik";
import {FieldInput} from "../../../components/FieldInput";

export const LoginForm = inject("store")(
  observer(({store: {auth}}) => {
    return (
      <div className="login-form-container">
        <Form className="settings-form">
          <FieldInput type="text" name="login" placeholder={"login"} errorName="login" />
          <FieldInput
            type="number"
            name="password"
            placeholder={"password"}
            errorName="password"
          />
        </Form>
      </div>
    );
  })
);
