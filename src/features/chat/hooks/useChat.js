import { Form } from 'antd';
import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { AppContext, AuthContext } from '../../../Context';
import { addDocument } from '../../../firebase';
import { useFirestore } from '../../common';

export const useChat = () => {
  const { members, selectedRoom, setIsInviteMemberVisible } =
    useContext(AppContext);

  const {
    user: { uid, photoURL, displayName },
  } = useContext(AuthContext);

  const [message, setMessage] = useState('');
  const [form] = Form.useForm();

  const inputRef = useRef(null);
  const messageListRef = useRef(null);

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [cursorPosition, setCursorPosition] = useState(0);

  const handleShowEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const onEmojiClick = (_event, emojiObject) => {
    const emoji = emojiObject.emoji;

    const ref = inputRef.current;
    ref.focus();
    const start = message.substring(0, ref.input.selectionStart);
    const end = message.substring(ref.input.selectionStart);

    const msg = start + emoji + end;

    setCursorPosition(start.length + emoji.length);
    setMessage(msg);
  };

  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };

  const handleOnSubmit = () => {
    addDocument('messages', {
      text: message,
      uid,
      photoURL,
      roomId: selectedRoom.id,
      displayName,
    });

    // reset input
    form.resetFields(['message']);
    setMessage('');
    setCursorPosition(0);
    setShowEmojiPicker(false);

    // focus to input again after submit
    if (inputRef?.current) {
      setTimeout(() => {
        inputRef.current.focus();
      });
    }
  };

  const condition = useMemo(
    () => ({
      fieldName: 'roomId',
      operator: '==',
      compareValue: selectedRoom.id,
    }),
    [selectedRoom.id],
  );

  const messages = useFirestore('messages', condition);

  useEffect(() => {
    // scroll to bottom after message changed
    if (messageListRef?.current) {
      messageListRef.current.scrollTop =
        messageListRef.current.scrollHeight + 50;
    }
  }, [messages]);

  useEffect(() => {
    if (inputRef.current) inputRef.current.input.selectionEnd = cursorPosition;
  }, [inputRef, cursorPosition]);

  return {
    form,
    inputRef,
    messageListRef,
    members,
    selectedRoom,
    setIsInviteMemberVisible,
    message,
    messages,
    showEmojiPicker,
    onEmojiClick,
    handleShowEmojiPicker,
    handleOnChange,
    handleOnSubmit,
  };
};
