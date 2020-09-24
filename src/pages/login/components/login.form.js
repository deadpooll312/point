import React from "react";
import {inject, observer} from "mobx-react";

export const LoginForm = inject("store")(
  observer(({store: {auth}}) => {
    return (
      <div className="login-form-container">
        <h1>Login</h1>
      </div>
    );
  })
);
