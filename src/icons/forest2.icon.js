import React from "react";
import Icon from "@ant-design/icons";

export const Forest2Icon = (props) => {
  // eslint-disable-next-line react/prop-types
  const {color} = props;
  const defaultColor = "#747474";

  const ICON = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <ellipse cx="6.5" cy="10" rx="3.5" ry="8" fill={color || defaultColor} />
        <ellipse cx="19.4375" cy="7.5" rx="2" ry="3.5" fill={color || defaultColor} />
        <ellipse cx="14.4375" cy="7.5" rx="2" ry="3.5" fill={color || defaultColor} />
        <rect x="6" y="17" width="1" height="5" fill={color || defaultColor} />
        <rect x="19" y="8" width="1" height="5" fill={color || defaultColor} />
        <rect x="14" y="8" width="1" height="5" fill={color || defaultColor} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21 19H11V22H13V20H19V22H21V19Z"
          fill={color || defaultColor}
        />
        <rect x="11.0625" y="15" width="10" height="3" fill={color || defaultColor} />
      </g>
    </svg>
  );

  return <Icon component={ICON} {...props} />;
};
