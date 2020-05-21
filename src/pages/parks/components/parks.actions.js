import React, {useCallback} from "react";
import {Button, Pagination, Space} from "antd";
import {inject, observer} from "mobx-react";

export const ParksActions = inject("store")(
  observer(({store: {parks}}) => {
    const onChange = useCallback((page) => {
      parks.updateParams({page: page - 1});
    }, []);

    return (
      <div className="parks__header">
        <Space size={10}>
          <Button type="primary">Открыть выбранное</Button>
          <Button danger>Закрыть выбранные</Button>
        </Space>
        <Pagination onChange={onChange} defaultCurrent={1} total={50} />
      </div>
    );
  })
);
