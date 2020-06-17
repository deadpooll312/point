import {decorate, observable} from "mobx";
import {ImageViewerAction} from "./image-viewer.action";

class ImageViewerStore extends ImageViewerAction {
  showModalImg = false;
  url = "";
  title = "";
}

// eslint-disable-next-line no-class-assign
ImageViewerStore = decorate(ImageViewerStore, {
  showModalImg: observable,
  url: observable,
  title: observable,
});

export default new ImageViewerStore();
