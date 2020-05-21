import React from "react";
import Icon from "@ant-design/icons";

export const Map = (props) => {
  const PandaSvg = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.54">
        <path
          d="M1 6V22L8 18L16 22L23 18V2L16 6L8 2L1 6Z"
          stroke="#25282B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M8 2V18" stroke="#25282B" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M16 6V22"
          stroke="#25282B"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );

  return <Icon component={PandaSvg} {...props} />;
};
