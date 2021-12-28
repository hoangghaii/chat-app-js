import { Form } from 'antd';
import { useContext, useState } from 'react';
import { AppContext } from '../../../Context';
import { db } from '../../../firebase';

export const useInviteMember = () => {
  const {
    isInviteMemberVisible,
    setIsInviteMemberVisible,
    selectedRoomId,
    selectedRoom,
  } = useContext(AppContext);

  const [value, setValue] = useState([]);
  const [form] = Form.useForm();

  const handleOk = () => {
    // handle logic
    // add new room to firestore
    const roomRef = db.collection('rooms').doc(selectedRoomId);

    roomRef.update({
      members: [...selectedRoom.members, ...value.map((item) => item.value)],
    });

    // reset form value
    form.resetFields();

    setIsInviteMemberVisible(false);
  };

  const handleCancel = () => {
    // reset form value
    form.resetFields();
    setValue([]);

    setIsInviteMemberVisible(false);
  };

  return {
    form,
    isInviteMemberVisible,
    value,
    curMembers: selectedRoom.members,
    handleOk,
    handleCancel,
    setValue,
  };
};
