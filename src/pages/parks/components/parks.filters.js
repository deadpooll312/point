import React, {useCallback, useEffect, useState} from "react";
import {inject, observer} from "mobx-react";
// local files
import {SelectComponent} from "../../../components/select";
import {filterNames} from "../../../consts/filter.const";

export const ParksFilters = inject("store")(
  observer(({store: {parks}}) => {
    const [regions] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [region, setRegion] = useState();
    const [district, setDistrict] = useState();

    useEffect(() => {
      setParams(setRegion, "regionCode");
      setParams(setDistrict, "districtCode");

      if (!parks.params.regionCode) {
        setDistricts([]);
      }
    }, [parks.params]);

    const setParams = (set, key) => {
      set(parks.params[key] ? {value: parks.params[key]} : undefined);
    };

    const setLabel = (data) => data.map((item) => ({...item, label: item.description}));

    const changeDistrict = useCallback(
      (districtCode) => {
        parks.updateParams({districtCode});
      },
      [parks]
    );

    const changeRegion = useCallback(
      (regionCode) => {
        parks.updateParams({regionCode});
        parks.updateParams({districtCode: undefined});
        parks
          .getFilters({group: filterNames.district, type: regionCode})
          .then((districts) => setDistricts(setLabel(districts)));
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
            disabled={!districts.length}
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
