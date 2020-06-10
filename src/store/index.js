import SidebarStore from "./sidebar/sidebar.store";
import ParksStore from "./parks/parks.store";
import AuthStore from "./auth/auth.store";
import MapStore from "./map/map.store";

class RootStore {
  constructor() {
    this.sidebar = SidebarStore;
    this.parks = ParksStore;
    this.auth = AuthStore;
    this.map = MapStore;
  }
}

export default new RootStore();
