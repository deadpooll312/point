import SidebarStore from "./sidebar/sidebar.store";
import ParksStore from "./parks/parks.store";
import AuthStore from "./auth/auth.store";

class RootStore {
  constructor() {
    this.sidebar = SidebarStore;
    this.parks = ParksStore;
    this.auth = AuthStore;
  }
}

export default new RootStore();
