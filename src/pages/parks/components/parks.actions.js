import React, {useCallback} from "react";
import {Button, Space} from "antd";
import {inject, observer} from "mobx-react";
import {PaginationComponent} from "../../../components/pagination";

export const ParksActions = inject("store")(
  observer(({store: {parks}}) => {
    const onChange = useCallback((page) => {
      parks.updateParams({page: page - 1});
      parks.getParks();
    }, []);

    const onSizeChange = useCallback((size) => {
      parks.updateParams({size});
      parks.getParks();
    }, []);

    return (
      <div className="parks__header">
        <Space size={10}>
          <Button type="primary">Открыть выбранное</Button>
          <Button danger>Закрыть выбранные</Button>
        </Space>
        <PaginationComponent onSize={onSizeChange} onChange={onChange} />
      </div>
    );
  })
);
