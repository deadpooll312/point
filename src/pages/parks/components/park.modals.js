import React from "react";
import {inject, observer} from "mobx-react";
import {ParkModalWarning} from "./park.modal.warnning";
import {ModalComponent} from "../../../components/modal.component";
import {modalParkStatuses, warningModalNames} from "../../../consts/modal.const";

export const ParkModals = inject("store")(
  observer(({store: {parks}}) => {
    return (
      <>
        <ModalComponent
          title={"Изменить состояние"}
          okText={"Да"}
          danger
          visible={parks.warningModalName === warningModalNames.edit}
          handleCancel={() => {
            parks.onParkUpdated(modalParkStatuses.canceled);
            parks.setWarningModalName(null);
          }}
          handleOk={() => {
            parks.setWarningModalName(null);
            parks.updateParkRepaint();
          }}
          cancelText="Отмена"
        >
          <ParkModalWarning
            parks={parks}
            text={`Вы собираетесь изменить Состояние (цвет) территории! Вы уверены?`}
          />
        </ModalComponent>

        <ModalComponent
          title={"Открытие"}
          okText={"Да, открыть"}
          visible={
            parks.warningModalName === warningModalNames.open ||
            parks.warningModalName === warningModalNames.openCouple
          }
          handleCancel={() => parks.setWarningModalName(null)}
          handleOk={() => {
            // TODO разделить когда будет массовое подтверждение
            if (
              parks.warningModalName === warningModalNames.open ||
              parks.warningModalName === warningModalNames.openCouple
            ) {
              parks.colorAccept();
            }
            parks.setWarningModalName(null);
          }}
          cancelText="Отмена"
        >
          <ParkModalWarning
            parks={parks}
            selectedItems={
              parks.warningModalName === warningModalNames.openCouple
                ? parks.selectedItems
                : null
            }
            text={"Вы собираетесь открыть территорию(ии)! Вы уверены?"}
          />
        </ModalComponent>

        <ModalComponent
          title={"Закрытие"}
          okText={"Да, закрыть"}
          danger
          visible={
            parks.warningModalName === warningModalNames.closed ||
            parks.warningModalName === warningModalNames.closedCouple
          }
          handleCancel={() => parks.setWarningModalName(null)}
          handleOk={() => {
            if (
              parks.warningModalName === warningModalNames.closed ||
              parks.warningModalName === warningModalNames.closedCouple
            ) {
              parks.colorAccept();
            }
            parks.setWarningModalName(null);
          }}
          cancelText="Отмена"
        >
          <ParkModalWarning
            parks={parks}
            selectedItems={
              parks.warningModalName === warningModalNames.closedCouple
                ? parks.selectedItems
                : null
            }
            text={`Вы собираетесь закрыть территорию(ии)! Вы уверены?`}
          />
        </ModalComponent>
      </>
    );
  })
);
