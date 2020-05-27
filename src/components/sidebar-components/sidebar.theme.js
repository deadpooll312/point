import React, {memo, useCallback} from "react";
import {Switch} from "antd";
import {getStorage, setStorage} from "../../services/storage.service";
import {theme} from "../../consts/storage.conts";
// eslint-disable-next-line
export const SidebarTheme = memo(({}) => {
  const onChange = useCallback((value) => {
    setStorage(theme, value);
    document.querySelector("html").setAttribute("theme", value ? "dark" : "");
  }, []);

  return (
    <div className="sidebar-theme">
      <span>Светлый / Тёмный интерфейс</span>
      <Switch defaultChecked={getStorage(theme)} onChange={onChange} />
    </div>
  );
});
