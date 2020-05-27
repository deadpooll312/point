import React, {useCallback, useEffect, useState} from "react";
import {Button, Space} from "antd";
import {inject, observer} from "mobx-react";
import {PaginationComponent} from "../../../components/pagination";
import {ModalComponent} from "../../../components/modal.component";
import {ParkModalWarning} from "./park.modal.warnning";
import {sysViewNameNo} from "../../../consts/text.const";

export const ParksActions = inject("store")(
  observer(({store: {parks}}) => {
    const [visible, setVisible] = useState(false);
    const [isForOpening, setOpening] = useState(false);
    const [actionType, setActionType] = useState("DISABLED");

    const onChange = useCallback(
      (page) => {
        parks.updateParams({page: page - 1});
        parks.getParks();
      },
      [parks]
    );

    const onSizeChange = useCallback(
      (size) => {
        parks.updateParams({size});
        parks.getParks();
      },
      [parks]
    );

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

    useEffect(() => {
      parks.selectedItems.forEach((item) => {
        if (item.sysViewName === sysViewNameNo) {
          setActionType("DISABLED");
        } else {
          item.crowdColor === "red" ? setActionType("CLOSE") : setActionType("OPEN");
        }
      });
    }, [parks.selectedItems]);

    return (
      <div className="parks__header">
        <ModalComponent
          title={isForOpening ? "Открытие" : "Закрытие"}
          okText={isForOpening ? "Да, открыть" : "Да, закрыть территорию"}
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
          <Button
            disabled={!(actionType === "OPEN")}
            type="primary"
            onClick={() => onSelectedItems(true)}
          >
            Открыть выбранное
          </Button>
          <Button
            disabled={!(actionType === "CLOSE")}
            danger
            onClick={() => onSelectedItems(false)}
          >
            Закрыть выбранные
          </Button>
        </Space>
        <PaginationComponent onSize={onSizeChange} onChange={onChange} />
      </div>
    );
  })
);
