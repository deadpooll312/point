import React, {useCallback} from "react";
import {Typography} from "antd";
import {MoreOutlined, SaveOutlined} from "@ant-design/icons";
import {inject, observer} from "mobx-react";
const {Title} = Typography;

export const ParksHeader = inject("store")(
  observer(({store: {sidebar}}) => {
    const save = useCallback(() => {}, []);

    const callMenu = useCallback(() => {
      sidebar.toggleDrawer(true);
    }, []);

    return (
      <div className="parks__title">
        <Title level={3}>Парки видовые</Title>
        <div>
          <SaveOutlined onClick={save} className="icon" />
          <MoreOutlined onClick={callMenu} className="icon" />
        </div>
      </div>
    );
  })
);
