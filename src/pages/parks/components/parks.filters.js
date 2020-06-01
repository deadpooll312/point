import React, {useCallback, useEffect, useState} from "react";
import {inject, observer} from "mobx-react";
// local files
import {SelectComponent} from "../../../components/select";
import {filterNames} from "../../../consts/filter.const";

export const ParksFilters = inject("store")(
  observer(({store: {parks}}) => {
    const [regions, setRegions] = useState([]);
    const [groups, setGroups] = useState([]);
    const [region, setRegion] = useState();
    const [group, setGroup] = useState();

    useEffect(() => {
      Promise.all([
        parks.getFilters(filterNames.group),
        parks.getFilters(filterNames.region),
      ]).then(([groups, regions]) => {
        setRegions(setLabel(regions));
        setGroups(setLabel(groups));
      });

      setParams(setRegion, "regionCode");
      setParams(setGroup, "groupType");
    }, [parks.params]);

    const setParams = (set, key) => {
      set(parks.params[key] ? {value: parks.params[key]} : undefined);
    };

    const setLabel = (data) => data.map((item) => ({...item, label: item.description}));

    const changeGroup = useCallback(
      (groupType) => {
        parks.updateParams({groupType: `${groupType}`});
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
            data={groups}
            value={group}
            labelInValue={true}
            handleChange={({value}) => changeGroup(value)}
            placeholder="Выберите район"
          />
        </label>
      </div>
    );
  })
);
