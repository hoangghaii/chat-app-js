import { Form, Input, Modal } from 'antd';
import React from 'react';
import { useAddRoom } from '../../../features/addroom';

const { Item } = Form;
const { TextArea } = Input;

export const AddRoomModal = () => {
  const { form, isAddRoomVisible, handleOk, handleCancel } = useAddRoom();

  return (
    <Modal
      title="Create Room"
      visible={isAddRoomVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form form={form} layout="vertical">
        <Item label="Room name" name="name">
          <Input placeholder="Enter room name" />
        </Item>
        <Item label="Description" name="description">
          <TextArea placeholder="Enter description" />
        </Item>
      </Form>
    </Modal>
  );
};
