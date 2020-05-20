import React from "react";
import {Typography} from "antd";
const {Title} = Typography;

export const ParksHeader = () => {
  return (
    <div className="parks__title">
      <Title level={3}>Парки видовые</Title>
    </div>
  );
};
