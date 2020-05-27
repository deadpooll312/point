import React, {memo} from "react";
import {Modal, Button} from "antd";

// eslint-disable-next-line react/display-name
export const ModalComponent = memo(
  ({
    title,
    children,
    visible,
    handleOk,
    handleCancel,
    okText,
    cancelText,
    danger,
    dangerCancel,
    dangerEdit,
    width,
    editText,
    handleEdit,
  }) => {
    return (
      <Modal
        width={width || 520}
        title={title}
        visible={visible}
        onCancel={handleCancel}
        footer={[
          // !!! danger - ключ чтобы окрасить в красный цвет!!!
          okText && (
            <Button key="submit" type={"primary"} danger={danger} onClick={handleOk}>
              {okText}
            </Button>
          ),
          editText && (
            <Button key="edit" danger={dangerEdit} onClick={handleEdit}>
              {editText}
            </Button>
          ),
          // !!! dangerCancel - ключ чтобы окрасить border, color в красный цвет!!!
          cancelText && (
            <Button key="back" danger={dangerCancel} onClick={handleCancel}>
              {cancelText}
            </Button>
          ),
        ]}
      >
        {children}
      </Modal>
    );
  }
);
