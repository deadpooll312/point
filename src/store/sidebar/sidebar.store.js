import {decorate, observable} from "mobx";
import {SidebarAction} from "./sidebar.action";

class SidebarStore extends SidebarAction {
  showBar = false;
  showDrawer = false;
}

// eslint-disable-next-line no-class-assign
SidebarStore = decorate(SidebarStore, {
  showBar: observable,
  showDrawer: observable,
});

export default new SidebarStore();
