import React, {useEffect, useState} from "react";
//local
import {Tab} from "./Tabs";
import {sidebarTabs} from "../consts/tabs.const";
import {useLocation} from "react-router-dom";

export const Sidebar = () => {
  const [active, setActive] = useState(0);
  const openTab = (id) => setActive(id);
  const params = useLocation();

  useEffect(() => {
    sidebarTabs.forEach((item) => {
      if (item.hash === params.hash) {
        setActive(item.id);
      }
    });
  }, [params.hash]);

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
      <button className="sidebar__exit" />
    </div>
  );
};
