import {inject, observer} from "mobx-react";
import React, {useCallback} from "react";
import {MenuOutlined} from "@ant-design/icons";
import {Layout} from "antd";
const {Header} = Layout;

export const HeaderComponent = inject("store")(
  observer(({store: {sidebar}}) => {
    const click = useCallback(
      (value) => {
        // document.documentElement.setAttribute("data-theme", value ? "dark" : "");
        sidebar.toggleModal(value);
      },
      [sidebar.showBar]
    );

    return (
      <Header>
        <MenuOutlined onClick={() => click(!sidebar.showBar)} />
        {/* <BellOutlined /> */}
      </Header>
    );
  })
);
