import { useEffect, useState } from 'react';
import { db } from '../../../firebase';

export const useChatAction = ({ id, reactions }) => {
  const [showReaction, setShowReaction] = useState(false);
  const [contentInfoClassName, setContentInfoClassName] =
    useState('content__info');
  const [dateClassName, setDateClassName] = useState('date');
  const [reactionsList, setReactionsList] = useState([]);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const handleShowReaction = () => {
    setShowReaction(!showReaction);
  };

  const handleChatModal = () => {
    setIsOpenDeleteModal(!isOpenDeleteModal);
  };

  const handleDeleleChat = () => {
    const messageRef = db.collection('messages').doc(id);
    messageRef.delete();
  };

  //TODO: handle function reply
  const handleReply = () => {};

  const onSelectReaction = (_event, emojiObject) => {
    const emoji = emojiObject.emoji;
    const messageRef = db.collection('messages').doc(id);
    messageRef.update({
      reactions: [...reactions, ...emoji],
    });
    setShowReaction(false);
  };

  const handleShowDate = () => {
    contentInfoClassName === 'content__info'
      ? setContentInfoClassName('content__info content__info--js')
      : setContentInfoClassName('content__info');
    dateClassName === 'date'
      ? setDateClassName('date date--js')
      : setDateClassName('date');
  };

  useEffect(() => {
    const counts = {};

    reactions.forEach((x) => {
      counts[x] = (counts[x] || 0) + 1;
    });

    const converData = Object.keys(counts).map((key) => {
      return { icon: key, count: counts[key] };
    });
    setReactionsList(converData);
  }, [reactions]);

  return {
    showReaction,
    contentInfoClassName,
    dateClassName,
    reactionsList,
    isOpenDeleteModal,
    handleShowReaction,
    onSelectReaction,
    handleShowDate,
    handleDeleleChat,
    handleChatModal,
    handleReply,
  };
};
