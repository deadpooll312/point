import React from "react";
import {Sidebar} from "../../components/Sidebar";
import Search from "../../components/Search";
import map from "../../img/jpg/map.jpg";
import CrewCard from "./components/СrewCard";

const MainScreen = () => {
  return (
    <div className="main-screen">
      <Sidebar />
      <div className="main-screen__challenges">
        <div className="main-screen__search">
          <h3>Вызовы</h3>
          <Search />
        </div>
        <div className="main-screen__cards">
          <CrewCard
            id="893BS"
            time="11:19:25"
            address="Лётчика Бабушкина 10"
            crewId="CHT345"
            disabled
          />
          <CrewCard id="893BS" time="11:19:25" address="Юных молодогвардейцев 10/A" />
          <CrewCard
            id="893BS"
            time="11:19:25"
            address="Лётчика Бабушкина 10"
            crewId="CHT345"
            disabled
          />
          <CrewCard
            id="893BS"
            time="11:19:25"
            address="Лётчика Бабушкина 10"
            crewId="CHT345"
            disabled
          />
          <CrewCard
            id="893BS"
            time="11:19:25"
            address="Лётчика Бабушкина 10"
            crewId="CHT345"
            disabled
          />
          <CrewCard
            id="893BS"
            time="11:19:25"
            address="Лётчика Бабушкина 10"
            crewId="CHT345"
            disabled
          />
          <CrewCard
            id="893BS"
            time="11:19:25"
            address="Лётчика Бабушкина 10"
            crewId="CHT345"
            disabled
          />
          <CrewCard
            id="893BS"
            time="11:19:25"
            address="Лётчика Бабушкина 10"
            crewId="CHT345"
            disabled
          />
        </div>
      </div>
      <img className="main-screen__map" src={map} alt="" />
    </div>
  );
};

export default MainScreen;
