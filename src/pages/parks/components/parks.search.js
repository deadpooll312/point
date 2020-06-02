import React, {useCallback, useState} from "react";
import {inject, observer} from "mobx-react";
import {Button, Input, Tooltip} from "antd";
import * as debounce from "lodash.debounce";
// local files
import {SelectComponent} from "../../../components/select";
import {parkSearchTypes} from "../../../consts/parks.const";
import {SearchSelect} from "../../../components/search.select";
import {ReloadOutlined} from "@ant-design/icons";

export const ParksSearch = inject("store")(
  observer(({store: {parks}}) => {
    const [searchType, setSearchType] = useState(parkSearchTypes[0]);
    const [data, setData] = useState([]);
    const [id, setId] = useState();

    const handleSearch = debounce((namePart) => {
      parks
        .searchPark({namePart})
        .then((data) => data.map((item) => ({...item, value: item.id})))
        .then((data) => setData(data));
    }, 300);

    const updateSearchType = useCallback(
      (value) => {
        setSearchType(value);
      },
      [searchType]
    );

    const submit = useCallback(() => {
      parks.updateParams({id});
      parks.getParks();
    }, [parks, id]);

    const refresh = useCallback(() => {
      parks.updateParams({id: undefined});
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

        {!parseInt(searchType.value) && (
          <div className="search-input">
            <Input
              placeholder="Введите ID парка"
              value={id}
              onChange={({target}) => setId(target.value)}
            />
          </div>
        )}

        {!!parseInt(searchType.value) && (
          <SearchSelect
            placeholder={"Введите название парка"}
            styles={{width: 300}}
            data={data}
            value={id}
            handleSearch={handleSearch}
            handleChange={(value) => setId(value)}
          />
        )}

        <div>
          <Button type="primary" onClick={submit}>
            Найти
          </Button>
        </div>
        {parks.params.id && (
          <Tooltip color={"var(--blue)"} placement="top" title="Сбросить поиск">
            <ReloadOutlined onClick={refresh} className="reload" />
          </Tooltip>
        )}
      </div>
    );
  })
);
