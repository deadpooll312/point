import React from "react";
import {Sidebar} from "../../components/Sidebar";
import Search from "../../components/Search";

const MainScreen = () => {
  return (
    <div className="main-screen">
      <Sidebar />
      <div className="main-screen__challenges">
        <div className="main-screen__search">
          <h3>Вызовы</h3>
          <Search />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default MainScreen;
