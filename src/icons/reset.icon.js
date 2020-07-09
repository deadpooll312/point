import React from "react";
import Icon from "@ant-design/icons";

export const ResetIcon = (props) => {
  const Svg = () => (
    <svg
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1V7H7"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.51 12.9999C4.15839 14.8403 5.38734 16.4201 7.01166 17.5013C8.63598 18.5825 10.5677 19.1065 12.5157 18.9944C14.4637 18.8823 16.3226 18.1401 17.8121 16.8797C19.3017 15.6193 20.3413 13.9089 20.7742 12.0063C21.2072 10.1037 21.0101 8.11191 20.2126 6.33105C19.4152 4.55019 18.0605 3.07674 16.3528 2.13271C14.6451 1.18868 12.6769 0.825212 10.7447 1.09707C8.81245 1.36892 7.02091 2.26137 5.64 3.63995L1 7.99995"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return <Icon component={Svg} {...props} />;
};
