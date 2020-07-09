import {decorate, observable} from "mobx";
import {SidebarAction} from "./sidebar.action";

class SidebarStore extends SidebarAction {
  showBar = false;
  showDrawer = false;
  showDrawerFilters = false;
  showModalReport = false;
}

// eslint-disable-next-line no-class-assign
SidebarStore = decorate(SidebarStore, {
  showBar: observable,
  showDrawer: observable,
  showDrawerFilters: observable,
  showModalReport: observable,
});

export default new SidebarStore();
