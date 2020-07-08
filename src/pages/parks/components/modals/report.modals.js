import React, {useCallback, useState} from "react";
import {inject, observer} from "mobx-react";
import {ModalComponent} from "../../../../components/modal.component";
import {GetReport} from "../getreport";

export const ReportModal = inject("store")(
  observer(({store: {sidebar, parks}}) => {
    const handleOk = useCallback(() => {
      console.log(parks.reportDate);
      sidebar.toggleModalReport(false);
    }, [sidebar.showModalReport]);

    return (
      <ModalComponent
        handleCancel={() => sidebar.toggleModalReport(false)}
        handleOk={handleOk}
        okText="Выгрузить"
        cancelText="Отмена"
        title={"Отчёт"}
        visible={sidebar.showModalReport}
        width={535}
      >
        <GetReport />
      </ModalComponent>
    );
  })
);
