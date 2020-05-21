import {decorate, observable} from "mobx";
import {ParksAction} from "./parks.action";
import {tableColumns} from "~/consts/parks.const";

const data = [
  {
    camCount: 0,
    countyCode: 0,
    countyName: "string",
    crowPoint: true,
    department: "string",
    districtCode: 0,
    districtName: "string",
    email1: "string",
    email2: "string",
    enterCount: 0,
    fence: true,
    groupType: "string",
    id: 0,
    inn: "string",
    name: "string",
    organization: "string",
    phone1: "string",
    phone2: "string",
    respName1: "string",
    respName2: "string",
    scam: 0,
    ssnif: 0,
    ssum: 0,
    standard: 0,
    type: "string",
    key: 1,
  },
  {
    camCount: 0,
    countyCode: 0,
    countyName: "string",
    crowPoint: true,
    department: "string",
    districtCode: 0,
    districtName: "string",
    email1: "string",
    email2: "string",
    enterCount: 0,
    fence: true,
    groupType: "string",
    id: 0,
    inn: "string",
    name: "string",
    organization: "string",
    phone1: "string",
    phone2: "string",
    respName1: "string",
    respName2: "string",
    scam: 0,
    ssnif: 0,
    ssum: 0,
    standard: 0,
    type: "string",
    key: 2,
  },
];

class ParksStore extends ParksAction {
  data = data;
  columns = tableColumns;
  params = {};
}

// eslint-disable-next-line no-class-assign
ParksStore = decorate(ParksStore, {
  data: observable,
  columns: observable,
  params: observable,
});

export default new ParksStore();
