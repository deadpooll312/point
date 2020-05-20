import SidebarStore from "./sidebar/sidebar.store";
import ParksStore from "./parks/parks.store";

class RootStore {
  constructor() {
    this.sidebar = SidebarStore;
    this.parks = ParksStore;
  }
}

export default new RootStore();
