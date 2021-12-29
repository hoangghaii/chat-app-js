import React, { createContext, useContext, useMemo, useState } from 'react';
import { useFirestore } from '../features/common';
import { db } from '../firebase';
import { AuthContext } from './AuthProvider';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isAddRoomVisible, setIsAddRoomVisible] = useState(false);
  const [isInviteMemberVisible, setIsInviteMemberVisible] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState('');
  const [replyMessageId, setReplyMessageId] = useState('');

  const {
    user: { uid },
  } = useContext(AuthContext);

  const roomsCondition = useMemo(() => {
    return {
      fieldName: 'members',
      operator: 'array-contains',
      compareValue: uid,
    };
  }, [uid]);

  const rooms = useFirestore('rooms', roomsCondition);

  const selectedRoom = useMemo(
    () => rooms.find((room) => room.id === selectedRoomId) || {},
    [rooms, selectedRoomId],
  );

  const usersCondition = useMemo(() => {
    return {
      fieldName: 'uid',
      operator: 'in',
      compareValue: selectedRoom.members,
    };
  }, [selectedRoom.members]);

  const members = useFirestore('users', usersCondition);

  const replyMessageRef = replyMessageId
    ? db.collection('messages').doc(replyMessageId)
    : null;

  return (
    <AppContext.Provider
      value={{
        rooms,
        members,
        isAddRoomVisible,
        selectedRoomId,
        selectedRoom,
        isInviteMemberVisible,
        replyMessageRef,
        setIsAddRoomVisible,
        setSelectedRoomId,
        setIsInviteMemberVisible,
        setReplyMessageId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
