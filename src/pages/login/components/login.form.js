import React from "react";
import {inject, observer} from "mobx-react";
import Button from "../../../components/button";

export const LoginForm = inject("store")(
  observer(({store: {auth}}) => {
    return (
      <div className="login-form-container">
        <h1>Login</h1>
        <Button name="Назначить" />
      </div>
    );
  })
);
