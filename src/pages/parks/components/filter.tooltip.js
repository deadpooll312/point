import React from "react";

export const FilterTooltip = ({value, data, children}) => {
  const text = data.find(
    (item) =>
      value &&
      item.value === value.value &&
      item.description &&
      item.description.length > 34
  );

  if (text) {
    return <div title={text.description}>{children}</div>;
  } else {
    return <div>{children}</div>;
  }
};
