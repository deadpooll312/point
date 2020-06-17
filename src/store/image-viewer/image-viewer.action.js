export class ImageViewerAction {
  showImg(url, title = "Изображение") {
    this.url = url;
    this.showModalImg = true;
    this.title = title;
  }

  closeImg() {
    this.showModalImg = false;
  }
}
