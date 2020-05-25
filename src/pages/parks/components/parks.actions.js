import React, {useCallback, useState} from "react";
import {Button, Space} from "antd";
import {inject, observer} from "mobx-react";
import {PaginationComponent} from "../../../components/pagination";
import {ModalComponent} from "../../../components/modal.component";
import {ParkModalWarning} from "./park.modal.warnning";

export const ParksActions = inject("store")(
  observer(({store: {parks}}) => {
    const [visible, setVisible] = useState(false);
    const [isForOpening, setOpening] = useState(false);

    const onChange = useCallback((page) => {
      parks.updateParams({page: page - 1});
      parks.getParks();
    }, []);

    const onSizeChange = useCallback((size) => {
      parks.updateParams({size});
      parks.getParks();
    }, []);

    const onSelectedItems = useCallback(
      (open) => {
        if (parks.selectedItems.length) {
          setOpening(open);
          setVisible(true);
        }
      },
      [parks.selectedItems]
    );

    const openPark = useCallback(() => {
      setVisible(true);
    }, []);

    return (
      <div className="parks__header">
        <ModalComponent
          title={isForOpening ? "Открытие" : "Закрытие"}
          okText={isForOpening ? "Да, открыть" : "Да, Закрыть территорию"}
          danger={!isForOpening}
          visible={visible}
          handleCancel={() => setVisible(false)}
          handleOk={openPark}
          cancelText="Отмена"
        >
          <ParkModalWarning
            selectedItems={parks.selectedItems}
            isForOpening={isForOpening}
          />
        </ModalComponent>

        <Space size={10}>
          <Button type="primary" onClick={() => onSelectedItems(true)}>
            Открыть выбранное
          </Button>
          <Button danger onClick={() => onSelectedItems(false)}>
            Закрыть выбранные
          </Button>
        </Space>
        <PaginationComponent onSize={onSizeChange} onChange={onChange} />
      </div>
    );
  })
);
