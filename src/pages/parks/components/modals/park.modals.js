import React from "react";
import {inject, observer} from "mobx-react";
import {ParkModalWarning} from "./park.modal.warnning";
import {ModalComponent} from "../../../../components/modal.component";
import {modalParkStatuses, warningModalNames} from "../../../../consts/modal.const";
import {ParkModalTab} from "../tab/park.modal.tab";
import {sysViewNameNo} from "../../../../consts/text.const";

export const ParkModals = inject("store")(
  observer(({store: {parks}}) => {
    const hideOkButton = () => parks.singlePark.sysViewName === sysViewNameNo;

    const isAvailableToChange = () =>
      parks.singlePark.sysViewName !== sysViewNameNo &&
      parks.singlePark.crowdColor === "red";

    return (
      <>
        {/*SINGLE CARD MODAL*/}
        <ModalComponent
          handleCancel={() => parks.setWarningModalName(undefined)}
          width={800}
          okText={
            hideOkButton()
              ? null
              : `${isAvailableToChange() ? "Закрыть" : "Открыть"} парк`
          }
          handleOk={() => {
            parks.setWarningModalName(undefined);
            if (parks.singlePark.crowdColor === "red") {
              parks.setWarningModalName(warningModalNames.closed);
            } else {
              parks.setWarningModalName(warningModalNames.open);
            }
          }}
          visible={parks.warningModalName === warningModalNames.openCard}
          danger={isAvailableToChange()}
          title={parks.singlePark.title || "title"}
        >
          <ParkModalTab />
        </ModalComponent>

        {/*SINGLE CARD MODAL*/}
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
