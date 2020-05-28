import React from "react";
import {inject, observer} from "mobx-react";
import {ParkModalWarning} from "./park.modal.warnning";
import {ModalComponent} from "~/components/modal.component";
import {warningModalNames} from "../../../consts/modal.const";

export const ParkModals = inject("store")(
  observer(({store: {parks}}) => {
    return (
      <>
        <ModalComponent
          title={"Изменить состояние"}
          okText={"Да"}
          danger
          visible={parks.warningModalName === warningModalNames.edit}
          handleCancel={() => parks.setWarningModalName(null)}
          handleOk={() => {
            parks.setWarningModalName(null);
            parks.updateParkRepaint();
          }}
          cancelText="Отмена"
        >
          <ParkModalWarning
            text={`Вы собираетесь изменить Состояние территорий Вы уверены?`}
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
            if (parks.warningModalName === warningModalNames.open) {
              parks.colorAccept();
            }
            parks.setWarningModalName(null);
          }}
          cancelText="Отмена"
        >
          <ParkModalWarning
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
            if (parks.warningModalName === warningModalNames.closed) {
              parks.colorAccept();
            }
            parks.setWarningModalName(null);
          }}
          cancelText="Отмена"
        >
          <ParkModalWarning
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
