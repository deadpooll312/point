import React from "react";
import Icon from "@ant-design/icons";

export const TerritoryIcon = (props) => {
  // eslint-disable-next-line react/prop-types
  const {color} = props;
  const defaultColor = "var(--iconColor)";

  const PandaSvg = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <ellipse cx="4.5" cy="16" rx="2.5" ry="4" fill={color || defaultColor} />
        <path
          d="M10 16C8.89543 16 8 18.6863 8 22H12C12 18.6863 11.1046 16 10 16Z"
          fill={color || defaultColor}
        />
        <path
          d="M15 19C13.8954 19 13 20.3431 13 22H17C17 20.3431 16.1046 19 15 19Z"
          fill={color || defaultColor}
        />
        <ellipse cx="19.5" cy="17" rx="2.5" ry="3" fill={color || defaultColor} />
        <rect x="4" y="18" width="1" height="4" fill={color || defaultColor} />
        <rect x="19" y="18" width="1" height="4" fill={color || defaultColor} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.00003 2L3.58582 3.41421L6.29825 6.12665C6.10471 6.71609 6.00001 7.34582 6.00001 8C6.00001 11.3137 8.6863 14 12 14C15.3137 14 18 11.3137 18 8C18 7.34583 17.8953 6.71611 17.7018 6.12668L20.4142 3.41421L19 2L16.7133 4.28676C15.6145 2.89402 13.9117 2 12 2C10.0884 2 8.38552 2.89401 7.28677 4.28674L5.00003 2ZM15 7V9L9.00001 9V7L15 7Z"
          fill={color || defaultColor}
        />
      </g>
    </svg>
  );

  return <Icon component={PandaSvg} {...props} />;
};
