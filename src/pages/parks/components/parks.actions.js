import React, {useCallback} from "react";
import {Button} from "antd";
import {MoreOutlined, SaveOutlined} from "@ant-design/icons";

export const ParksActions = () => {
  const save = useCallback(() => {}, []);

  const callMenu = useCallback(() => {}, []);

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
};
