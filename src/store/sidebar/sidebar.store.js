import {decorate, observable} from "mobx";
import {SidebarAction} from "./sidebar.action";

class SidebarStore extends SidebarAction {
  showBar = false;
}

// eslint-disable-next-line no-class-assign
SidebarStore = decorate(SidebarStore, {
  showBar: observable,
});

export default new SidebarStore();
