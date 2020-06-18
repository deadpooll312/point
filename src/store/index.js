import SidebarStore from "./sidebar/sidebar.store";
import ParksStore from "./parks/parks.store";
import AuthStore from "./auth/auth.store";
import MapStore from "./map/map.store";
import ImageViewer from "./image-viewer/image-viewer.store";

class RootStore {
  constructor() {
    this.sidebar = SidebarStore;
    this.parks = ParksStore;
    this.auth = AuthStore;
    this.map = MapStore;
    this.imageViewer = ImageViewer;
  }
}

export default new RootStore();
