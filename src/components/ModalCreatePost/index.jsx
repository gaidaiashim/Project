import { Modal } from "antd";
import React from "react";

const ModalCreatePost = ({ visible, onOk, onCancel }) => {
  return (
    <Modal
      title="Create Post"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
    >
      <div>Some contents...</div>
    </Modal>
  );
};

export default ModalCreatePost;
