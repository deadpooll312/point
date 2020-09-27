import React from "react";
import Challenges from "../pages/challenges/Challenges";
import {inject, observer} from "mobx-react";

// eslint-disable-next-line react/prop-types
export const PrivateRouter = inject("store")(
  observer(({store: {auth}}) => {
    return <Challenges />;
  })
);
