import React from "react";
import Icon from "@ant-design/icons";

export const FilterIcon = (props) => {
  const Svg = () => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.54">
        <path
          d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );

  return <Icon component={Svg} {...props} />;
};
