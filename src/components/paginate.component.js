import React from "react";
import {Typography} from "antd";
import {LeftOutlined, RightOutlined} from "@ant-design/icons";

const {Text} = Typography;

export const PaginateComponent = ({onChange, hasNextPage, currentPage}) => {
  return (
    <div className="paginate">
      <Text
        disabled={!currentPage}
        onClick={() => (!currentPage ? undefined : onChange())}
      >
        <LeftOutlined />
        Пред. страница
      </Text>
      <Text
        disabled={!hasNextPage}
        onClick={() => (hasNextPage ? onChange(true) : undefined)}
      >
        След. страница
        <RightOutlined />
      </Text>
    </div>
  );
};
