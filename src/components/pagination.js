import React from "react";
import {Pagination} from "antd";

// eslint-disable-next-line react/prop-types
export const PaginationComponent = ({onChange}) => (
  <Pagination onChange={onChange} defaultCurrent={1} total={50} />
);
