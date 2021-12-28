import { Modal, Typography } from 'antd';
import React from 'react';

const { Title } = Typography;

export const DeleteMessageModal = ({
  isOpenDeleteModal,
  handleChatModal,
  handleDeleleChat,
}) => {
  return (
    <Modal
      title="Create Room"
      visible={isOpenDeleteModal}
      onOk={handleDeleleChat}
      onCancel={handleChatModal}
    >
      <Title level={3}>Are you sure to delete?</Title>
    </Modal>
  );
};
