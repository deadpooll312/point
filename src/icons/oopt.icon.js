import React from "react";
import Icon from "@ant-design/icons";

export const OoptIcon = (props) => {
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
        <path
          d="M9.00002 18.2281V20.9827L7.00006 20.9827V18.2282H3.74508C3.47265 18.2282 3.25012 17.8332 3.25012 17.3511C3.25012 17.1052 3.30758 16.882 3.40014 16.7236L5.27009 13.4037H4.49507C4.2226 13.4037 4.00008 13.0088 4.00008 12.5265C4.00008 12.2806 4.05756 12.0575 4.15012 11.899L6.02007 8.57914H5.24505C4.97258 8.57914 4.75006 8.17567 4.75006 7.68003C4.75006 7.42992 4.8076 7.20202 4.9001 7.03972L7.52262 2.26314C7.71755 1.91229 8.03247 1.91229 8.22745 2.26314L10.855 7.04831C10.9448 7.21061 11 7.43427 11 7.68003C11 8.17567 10.7773 8.57914 10.5049 8.57914H9.72755L11.605 11.9079C11.6949 12.066 11.7499 12.2853 11.7499 12.5265C11.7499 13.0087 11.5274 13.4036 11.2549 13.4036H10.4776L12.355 16.7324C12.4448 16.8905 12.5 17.1098 12.5 17.3511C12.5 17.8332 12.2773 18.2281 12.0049 18.2281H9.00002Z"
          fill={color || defaultColor}
        />
        <ellipse
          cx="17.375"
          cy="11.0312"
          rx="3.5"
          ry="6.96875"
          fill={color || defaultColor}
        />
        <rect x="16.875" y="17" width="1" height="3.9827" fill={color || defaultColor} />
        <rect x="2" y="20" width="20" height="1" fill={color || defaultColor} />
      </g>
    </svg>
  );

  return <Icon component={PandaSvg} {...props} />;
};
