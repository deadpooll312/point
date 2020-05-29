import React, {useEffect, useState} from "react";
import {Table} from "antd";
import {WarningIcon} from "~/icons/warning.icon";
import {warningColumns} from "~/consts/parks.const";
import {modalParkStatuses} from "../../../consts/modal.const";

export const ParkModalWarning = ({selectedItems, text, parks}) => {
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => setTimer(timer - 1), 1000);
    if (!timer) {
      clearInterval(interval);
      parks.setWarningModalName(null);
      parks.onParkUpdated(modalParkStatuses.canceled);
    }
    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  return (
    <div className="park-modal-warning">
      <WarningIcon />
      <p>Внимание!</p>
      <p>{text}</p>
      <p>Окно закроется через {timer} секунд</p>
      {selectedItems && (
        <Table dataSource={selectedItems} columns={warningColumns} pagination={false} />
      )}
    </div>
  );
};
