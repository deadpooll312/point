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

    const [organizations, setOrganizations] = useState([]);
    const [organization, setOrganization] = useState();

    const [departments, setDepartments] = useState([]);
    const [department, setDepartment] = useState();

    useEffect(() => {
      parks
        .getFilters({group: filterNames.region})
        .then((organizations) => setRegions(setLabel(organizations)));
    }, []);

    useEffect(() => {
      parks
        .getFilters({group: filterNames.organization})
        .then((districts) => setOrganizations(setLabel(districts)));
    }, []);

    useEffect(() => {
      parks
        .getFilters({group: filterNames.department})
        .then((districts) => setDepartments(setLabel(districts)));
    }, []);

    useEffect(() => {
      setParams(setRegion, "regionCode");
      setParams(setDistrict, "districtCode");
      setParams(setOrganization, "organizationCode");
      setParams(setDepartment, "departmentCode");

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

    const changeOrganization = useCallback(
      (organizationCode) => {
        parks.updateParams({organizationCode});
      },
      [parks]
    );

    const changeDepartment = useCallback(
      (departmentCode) => {
        parks.updateParams({departmentCode});
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

        <label>
          <span>По балансодержателю</span>
          <SelectComponent
            disabled={!organizations.length}
            data={organizations}
            value={organization}
            labelInValue={true}
            handleChange={({value}) => changeOrganization(value)}
            placeholder="Выберите район"
          />
        </label>

        <label>
          <span>По ОИВ</span>
          <SelectComponent
            disabled={!departments.length}
            data={departments}
            value={department}
            labelInValue={true}
            handleChange={({value}) => changeDepartment(value)}
            placeholder="Выберите район"
          />
        </label>
      </div>
    );
  })
);
