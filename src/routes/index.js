import React from "react";
import MainScreen from "../pages/MainScreen/MainScreen";
import {inject, observer} from "mobx-react";

// eslint-disable-next-line react/prop-types
export const PrivateRouter = inject("store")(
  observer(({store: {auth}}) => {
    return <MainScreen />;
  })
);
