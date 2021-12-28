import { Form } from 'antd';
import { useContext } from 'react';
import { AppContext, AuthContext } from '../../../Context';
import { addDocument } from '../../../firebase';

export const useAddRoom = () => {
  const { isAddRoomVisible, setIsAddRoomVisible } = useContext(AppContext);
  const {
    user: { uid },
  } = useContext(AuthContext);

  const [form] = Form.useForm();

  const handleOk = () => {
    // handle logic
    // add new room to firestore
    addDocument('rooms', { ...form.getFieldValue(), members: [uid] });

    // reset form value
    form.resetFields();

    setIsAddRoomVisible(false);
  };

  const handleCancel = () => {
    // reset form value
    form.resetFields();

    setIsAddRoomVisible(false);
  };

  return {
    form,
    isAddRoomVisible,
    handleOk,
    handleCancel,
  };
};
