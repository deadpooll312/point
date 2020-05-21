import {decorate, observable} from "mobx";
import {ParksAction} from "./parks.action";
import {tableColumns} from "~/consts/parks.const";

class ParksStore extends ParksAction {
  data = [];
  columns = tableColumns;
  params = {size: 10, page: 0};
}

// eslint-disable-next-line no-class-assign
ParksStore = decorate(ParksStore, {
  data: observable,
  columns: observable,
  params: observable,
});

export default new ParksStore();
