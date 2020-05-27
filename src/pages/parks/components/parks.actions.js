import React, {useCallback, useState} from "react";
import {inject, observer} from "mobx-react";
import {PaginationComponent} from "../../../components/pagination";
import {ModalComponent} from "../../../components/modal.component";
import {ParkModalWarning} from "./park.modal.warnning";
import {ParksActionButtons} from "./parks.action.button";

export const ParksActions = inject("store")(
  observer(({store: {parks}}) => {
    const [visible, setVisible] = useState(false);
    const [isForOpening, setOpening] = useState(false);

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

        <ParksActionButtons parks={parks} onSelectedItems={onSelectedItems} />

        <PaginationComponent parks={parks} onSize={onSizeChange} onChange={onChange} />
      </div>
    );
  })
);
