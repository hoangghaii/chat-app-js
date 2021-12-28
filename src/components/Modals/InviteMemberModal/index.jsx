import { Form, Modal } from 'antd';
import React from 'react';
import { fetchUserList } from '../../../features/common';
import { useInviteMember } from '../../../features/inviteMember';
import { DebounceSelect } from './DebounceSelect';

export const InviteMemberModal = () => {
  const {
    form,
    isInviteMemberVisible,
    value,
    curMembers,
    handleOk,
    handleCancel,
    setValue,
  } = useInviteMember();

  return (
    <Modal
      title="Invite member"
      visible={isInviteMemberVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      destroyOnClose={true}
    >
      <Form form={form} layout="vertical">
        <DebounceSelect
          mode="multiple"
          name="search-user"
          label="Member name"
          value={value}
          placeholder="Enter member name"
          fetchOptions={fetchUserList}
          onChange={(newValue) => setValue(newValue)}
          curMembers={curMembers}
          style={{ width: '100%' }}
        />
      </Form>
    </Modal>
  );
};
