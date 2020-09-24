import React from "react";
import {inject, observer} from "mobx-react";

export const App = inject("store")(
  observer(({store}) => {
    return (
      <div className="App">
        <h1>App</h1>
      </div>
    );
  })
);
