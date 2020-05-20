import React, {useCallback} from "react";
import {Button} from "antd";
import {MoreOutlined, SaveOutlined} from "@ant-design/icons";
import {inject, observer} from "mobx-react";

export const ParksActions = inject("store")(
  observer(({store: {sidebar}}) => {
    const save = useCallback(() => {}, []);

    const callMenu = useCallback(() => {
      sidebar.toggleDrawer(true);
    }, []);

    return (
      <div className="parks__header">
        <div>
          <Button type="primary">Открыть выбранное</Button>
          <Button danger>Закрыть выбранные</Button>
        </div>
        <div>
          <SaveOutlined onClick={save} className="icon" />
          <MoreOutlined onClick={callMenu} className="icon" />
        </div>
      </div>
    );
  })
);
