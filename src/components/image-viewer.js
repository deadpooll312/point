import React from "react";
import {Modal} from "antd";
import EyeOutlined from "@ant-design/icons/lib/icons/EyeOutlined";
import {inject, observer} from "mobx-react";

export const ImageViewer = inject("store")(
  observer(({store: {imageViewer}, url, children, title}) => {
    return (
      <div
        className="image-viewer-wrapper"
        onClick={() => imageViewer.showImg(url, title)}
      >
        <div className="image-viewer-overlay">
          <EyeOutlined />
        </div>
        <div className="image-viewer-content">{children}</div>
      </div>
    );
  })
);

export const ModalImageViewer = inject("store")(
  observer(({store: {imageViewer}}) => {
    return (
      <Modal
        visible={imageViewer.showModalImg}
        footer={null}
        title={imageViewer.title}
        onCancel={() => imageViewer.closeImg()}
      >
        <img src={imageViewer.url} className="image-viewer-big-img" />
      </Modal>
    );
  })
);
