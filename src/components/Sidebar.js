import React from "react";
//local
import policeIcon from "../img/svg/police.svg";
import searchIcon from "../img/svg/search.svg";
import securityIcon from "../img/svg/security-logo.svg";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <button />
        <span>11:27 PM</span>
      </div>
      <div className="sidebar__nav">
        <button>
          <img src={policeIcon} alt="" />
          <span>ВЫЗОВЫ</span>
        </button>
        <button>
          <img src={searchIcon} alt="" />
          <span>ИСТОРИЯ</span>
        </button>
        <button>
          <img src={securityIcon} alt="" />
          <span>ЧОП</span>
        </button>
      </div>
      <div className="sidebar__exit">
        <button />
      </div>
    </div>
  );
};
