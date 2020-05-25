import React from "react";
import Icon from "@ant-design/icons";

export const WarningIcon = (props) => {
  // eslint-disable-next-line react/prop-types
  const ICON = () => (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M41.16 15.4401L7.27999 72.0001C6.58146 73.2098 6.21186 74.5813 6.20795 75.9782C6.20404 77.375 6.56596 78.7486 7.2577 79.9622C7.94944 81.1758 8.94689 82.1871 10.1508 82.8955C11.3548 83.6039 12.7232 83.9847 14.12 84.0001H81.88C83.2768 83.9847 84.6452 83.6039 85.8492 82.8955C87.0531 82.1871 88.0505 81.1758 88.7423 79.9622C89.434 78.7486 89.7959 77.375 89.792 75.9782C89.7881 74.5813 89.4185 73.2098 88.72 72.0001L54.84 15.4401C54.1269 14.2645 53.1229 13.2926 51.9248 12.618C50.7267 11.9435 49.3749 11.5891 48 11.5891C46.6251 11.5891 45.2733 11.9435 44.0752 12.618C42.8771 13.2926 41.8731 14.2645 41.16 15.4401V15.4401Z"
        stroke="#F2994A"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M48 36V52"
        stroke="#F2994A"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M48 68H48.04"
        stroke="#F2994A"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return <Icon component={ICON} {...props} />;
};
