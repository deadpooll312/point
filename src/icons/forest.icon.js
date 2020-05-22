import React from "react";
import Icon from "@ant-design/icons";

export const ForestIcon = (props) => {
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
      <ellipse cx="5" cy="8.00002" rx="3" ry="6.00002" fill={color || defaultColor} />
      <ellipse cx="19.5" cy="6.5" rx="2.5" ry="3.5" fill={color || defaultColor} />
      <rect x="4.5" y="12" width="1" height="4" fill={color || defaultColor} />
      <rect x="19" y="8" width="1" height="4" fill={color || defaultColor} />
      <path d="M22 21H2.00001V17C13.1111 17 22 21 22 21Z" fill={color || defaultColor} />
      <path
        d="M22 13V19C20.7847 17.9063 13.1806 16 9.77778 16C13.2222 13.6 19.3611 13 22 13Z"
        fill={color || defaultColor}
      />
      <path d="M9 11H16V12H9V11Z" fill={color || defaultColor} />
      <rect x="10" y="9" width="5" height="1" fill={color || defaultColor} />
      <rect x="11" y="7" width="3" height="1" fill={color || defaultColor} />
    </svg>
  );

  return <Icon component={ICON} {...props} />;
};
