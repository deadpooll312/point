import {Button} from "antd";
import React, {memo} from "react";

// eslint-disable-next-line react/display-name
export const SearchButton = memo(({submit}) => {
  return (
    <div>
      <Button type="primary" onClick={submit}>
        Найти
      </Button>
    </div>
  );
});
