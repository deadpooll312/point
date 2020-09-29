import React, {useState} from "react";
//local
import {Tab} from "./Tabs";
import {sidebarTabs} from "../consts/tabs.const";

export const Sidebar = () => {
  const [active, setActive] = useState(0);
  const openTab = (id) => setActive(id);
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <button />
        <span>11:27 PM</span>
      </div>
      <div className="sidebar__nav">
        {sidebarTabs.map((item) => {
          return (
            <Tab
              hash={item.hash}
              key={item.id}
              name={item.title}
              img={item.img}
              addClass={item.id === active ? "tab__active" : ""}
              onClick={() => openTab(item.id)}
            />
          );
        })}
      </div>
      <div className="sidebar__exit">
        <button />
      </div>
    </div>
  );
};
