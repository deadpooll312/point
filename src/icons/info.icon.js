import React from "react";
import Icon from "@ant-design/icons";

export const InfoIcon = (props) => {
  // eslint-disable-next-line react/prop-types
  const {color} = props;
  const defaultColor = "#747474";

  const PandaSvg = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke={color || defaultColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.09003 9.00008C9.32513 8.33175 9.78918 7.76819 10.4 7.40921C11.0108 7.05024 11.7289 6.91902 12.4272 7.03879C13.1255 7.15857 13.7588 7.52161 14.2151 8.06361C14.6714 8.60561 14.9211 9.2916 14.92 10.0001C14.92 12.0001 11.92 13.0001 11.92 13.0001"
          stroke={color || defaultColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 17H12.01"
          stroke={color || defaultColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );

  return <Icon component={PandaSvg} {...props} />;
};
