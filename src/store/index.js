import SidebarStore from "./sidebar/sidebar.store";

class RootStore {
  constructor() {
    this.sidebar = SidebarStore;
  }
}

export default new RootStore();
