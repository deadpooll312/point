import React, {memo} from "react";
import {Modal, Button} from "antd";

// eslint-disable-next-line react/display-name
export const ModalComponent = memo(
  ({title, children, visible, handleOk, handleCancel, okText, cancelText, danger}) => {
    return (
      <Modal
        title={title}
        visible={visible}
        footer={[
          // !!! danger - ключ чтобы окрасить в красный цвет!!!
          <Button key="submit" type={"primary"} danger={danger} onClick={handleOk}>
            {okText}
          </Button>,
          <Button key="back" onClick={handleCancel}>
            {cancelText}
          </Button>,
        ]}
      >
        {children}
      </Modal>
    );
  }
);
