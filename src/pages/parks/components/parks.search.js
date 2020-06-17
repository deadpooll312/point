import React, {useCallback, useEffect, useState} from "react";
import {inject, observer} from "mobx-react";
import * as debounce from "lodash.debounce";
// local files
import {SelectComponent} from "../../../components/select";
import {parkSearchTypes} from "../../../consts/parks.const";
import {SearchButton} from "./search/search.button";
import {SearchTooltip} from "./search/search.tooltip";
import {SearchFindSelect} from "./search/search.find.select";
import {SearchInput} from "./search/search.input";

export const ParksSearch = inject("store")(
  observer(({store: {parks, map}}) => {
    const [searchType, setSearchType] = useState(parkSearchTypes[0]);
    const [data, setData] = useState([]);
    const [id, setId] = useState();

    const handleSearch = debounce((namePart) => {
      parks
        .searchPark({namePart})
        .then((data) => data.map((item) => ({...item, value: item.id})))
        .then((data) => setData(data));
    }, 300);

    useEffect(() => {
      if (map.searchPolygonId) {
        setSearchType(parkSearchTypes[0]);
        setId(`${map.searchPolygonId}`);
        submit();
      }
    }, [map.searchPolygonId, id]);

    const updateSearchType = useCallback(
      (value) => {
        setSearchType(value);
      },
      [searchType]
    );

    const submit = useCallback(() => {
      parks.resetParkParams();
      parks.updateParams({id, groupType: 1});
      parks.getParks();
    }, [parks, id]);

    const refresh = useCallback(() => {
      parks.updateParams({id: undefined});
      map.updateSearchPolygonId(undefined);
      setId(undefined);
      parks.getParks();
    }, [parks]);

    return (
      <div className="parks-search">
        <div>
          <SelectComponent
            data={parkSearchTypes}
            value={searchType}
            labelInValue={true}
            handleChange={updateSearchType}
            placeholder="По ID парка"
          />
        </div>

        <SearchInput
          value={!parseInt(searchType.value)}
          id={id}
          onChange={({target}) => setId(target.value)}
        />

        <SearchFindSelect
          value={parseInt(searchType.value)}
          data={data}
          id={id}
          handleSearch={handleSearch}
          handleChange={(value) => {
            setId(value);
          }}
        />

        <SearchButton submit={submit} />
        <SearchTooltip id={parks.params.id} refresh={refresh} />
      </div>
    );
  })
);
