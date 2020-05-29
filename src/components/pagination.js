import React, {useCallback} from "react";
import {Select} from "antd";
import {PaginateComponent} from "./paginate.component";
import {inject, observer} from "mobx-react";
import {getPageCount} from "../services/pagination.helper";
const {Option} = Select;

export const PaginationComponent = inject("store")(
  observer(({store: {parks}}) => {
    const options = [10, 20, 50];

    const onChange = useCallback(
      (isNext) => {
        const page = getPageCount(parks.params.page, isNext);

        parks.updateParams({page});
        parks.getParks();
      },
      [parks]
    );

    const onSizeChange = useCallback(
      (size) => {
        parks.updateParams({size, page: 0});
        parks.getParks();
      },
      [parks]
    );

    return (
      <div className="pagination-wrapper">
        <span>Показывать:</span>
        <Select defaultValue={10} onChange={onSizeChange} bordered={false}>
          {options.map((value) => (
            <Option key={value} value={value}>
              {value}
            </Option>
          ))}
        </Select>
        <PaginateComponent onChange={onChange} hasNextPage={parks.hasParksNextPage} />
      </div>
    );
  })
);
