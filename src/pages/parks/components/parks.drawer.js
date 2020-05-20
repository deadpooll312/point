import React, {useCallback, useState} from "react";
import {Drawer, Checkbox} from "antd";
import {inject, observer} from "mobx-react";
import {MenuOutlined} from "@ant-design/icons";

export const ParksDrawer = inject("store")(
  observer(({store: {sidebar}}) => {
    const [defaultArray, setArray] = useState([
      "ID",
      "Название объекта",
      "Тип объекта",
      "Возм. места скопления",
      "Кол-во входов",
    ]);
    const onClose = useCallback(() => {
      sidebar.toggleDrawer(false);
    }, []);

    return (
      <Drawer
        width={300}
        className="draw"
        title="Настройки таблицы"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={sidebar.showDrawer}
      >
        {defaultArray.map((item) => (
          <div className="draw__item">
            <Checkbox checked={true} onChange={(e) => console.log(e)}>
              {item}
            </Checkbox>
            <MenuOutlined />
          </div>
        ))}
      </Drawer>
    );
  })
);
