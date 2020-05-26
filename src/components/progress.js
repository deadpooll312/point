import React from "react";

export const ProgressComponent = ({left, right}) => {
  return (
    <div className="progress">
      <div className="progress__percent">
        <span>{left}%</span>
        <span>{right}%</span>
      </div>
      <div className="progress__line">
        <i style={{width: `${left}%`}}></i>
        <i style={{width: `${right}%`}}></i>
      </div>
    </div>
  );
};
