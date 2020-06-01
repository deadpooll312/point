import React, {useCallback, useEffect, useState} from "react";
import {inject, observer} from "mobx-react";
// local files
import {SelectComponent} from "../../../components/select";
import {filterNames} from "../../../consts/filter.const";

export const ParksFilters = inject("store")(
  observer(({store: {parks}}) => {
    const [regions, setRegions] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [region, setRegion] = useState();
    const [district, setDistrict] = useState();

    useEffect(() => {
      Promise.all([
        parks.getFilters(filterNames.district),
        parks.getFilters(filterNames.region),
      ]).then(([groups, regions]) => {
        setRegions(setLabel(regions));
        setDistricts(setLabel(groups));
      });
    }, []);

    useEffect(() => {
      setParams(setRegion, "regionCode");
      setParams(setDistrict, "districtCode");
    }, [parks.params]);

    const setParams = (set, key) => {
      set(parks.params[key] ? {value: parks.params[key]} : undefined);
    };

    const setLabel = (data) => data.map((item) => ({...item, label: item.description}));

    const changeDistrict = useCallback(
      (groupType) => {
        parks.updateParams({districtCode: `${groupType}`});
      },
      [parks]
    );

    const changeRegion = useCallback(
      (regionCode) => {
        parks.updateParams({regionCode: `${regionCode}`});
      },
      [parks]
    );

    return (
      <div className="park-filters">
        <label>
          <span>По округу</span>
          <SelectComponent
            data={regions}
            value={region}
            labelInValue={true}
            handleChange={({value}) => changeRegion(value)}
            placeholder="Выберите округ"
          />
        </label>

        <label>
          <span>По району</span>
          <SelectComponent
            data={districts}
            value={district}
            labelInValue={true}
            handleChange={({value}) => changeDistrict(value)}
            placeholder="Выберите район"
          />
        </label>
      </div>
    );
  })
);
