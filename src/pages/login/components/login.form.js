import React, {useEffect} from "react";
import * as Yup from "yup";
import {useFormik} from "formik";
import {inject, observer} from "mobx-react";
import {required} from "~/consts/text.const";

export const LoginForm = inject("store")(
  observer(({store: {auth}}) => {
    const formik = useFormik({
      initialValues: {
        login: "",
        password: "",
      },
      // validationSchema: Yup.object({
      //   login: Yup.string().required(required),
      //   password: Yup.string().required(required),
      // }),
      onSubmit: (values) => {
        console.log("auth", auth);
        auth.login(values);
      },
    });

    useEffect(() => {
      console.log(auth.user);
    }, [auth.user]);

    return (
      <form onSubmit={formik.handleSubmit}>
        <input
          id="login"
          name="login"
          onChange={formik.handleChange}
          type="text"
          value={formik.values.email}
          placeholder={"email"}
        />
        <p>{formik.errors.login}</p>
        <input
          id="password"
          name="password"
          onChange={formik.handleChange}
          type="text"
          value={formik.values.password}
          placeholder={"password"}
        />
        <p>{formik.errors.password}</p>
        <button type="submit">login</button>
      </form>
    );
  })
);
