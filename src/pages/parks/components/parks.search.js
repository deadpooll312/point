import React, {useCallback, useEffect, useState} from "react";
import {SelectComponent} from "../../../components/select";
import {inject, observer} from "mobx-react";
import {filterNames} from "../../../consts/filter.const";
import {Button, Input} from "antd";
import SearchOutlined from "@ant-design/icons/lib/icons/SearchOutlined";

export const ParksSearch = inject("store")(
  observer(({store: {parks}}) => {
    const [regions, setRegions] = useState([]);
    const [region, setRegion] = useState();

    useEffect(() => {
      Promise.all([
        parks.getFilters(filterNames.district),
        parks.getFilters(filterNames.region),
      ]).then(([regions]) => {
        setRegions(setLabel(regions));
      });
    }, []);

    useEffect(() => {
      setParams(setRegion, "regionCode");
    }, [parks.params]);

    const setParams = (set, key) => {
      set(parks.params[key] ? {value: parks.params[key]} : undefined);
    };
    const setLabel = (data) => data.map((item) => ({...item, label: item.description}));

    const changeRegion = useCallback(
      (regionCode) => {
        console.log(regionCode);
        //parks.updateParams({regionCode: `${regionCode}`});
      },
      [parks]
    );

    const handleSearch = () => {
      console.log("search");
    };

    return (
      <div className="parks-search">
        <div>
          <SelectComponent
            data={regions}
            value={region}
            labelInValue={true}
            handleChange={({value}) => changeRegion(value)}
            placeholder="По ID нарушения"
          />
        </div>

        <div className="search-input">
          <Input placeholder="Введите критерий для поиска" prefix={<SearchOutlined />} />
        </div>

        <div>
          <Button type="primary" onClick={() => handleSearch()}>
            Найти
          </Button>
        </div>
      </div>
    );
  })
);
