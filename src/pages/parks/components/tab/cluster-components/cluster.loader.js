import {Spin} from "antd";
import React from "react";

export const ClusterLoader = () => {
  return (
    <div className="clusters-spin">
      <Spin tip="Загрузка..." />
    </div>
  );
};
