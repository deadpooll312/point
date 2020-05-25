import React, {memo, useCallback} from "react";
import {Switch} from "antd";
// eslint-disable-next-line
export const SidebarTheme = memo(({}) => {
  const onChange = useCallback((value) => {
    document.querySelector("html").setAttribute("theme", value ? "" : "dark");
  }, []);

  return (
    <div className="sidebar-theme">
      <span>Светлый / Тёмный интерфейс</span>
      <Switch defaultChecked onChange={onChange} />
    </div>
  );
});
