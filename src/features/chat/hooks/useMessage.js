import { message } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { AppContext, AuthContext } from '../../../Context';
import { db } from '../../../firebase';

export const useMessage = ({ id, reactions, replyFor }) => {
  const [showReaction, setShowReaction] = useState(false);
  const [contentInfoClassName, setContentInfoClassName] =
    useState('content__info');
  const [dateClassName, setDateClassName] = useState('date');
  const [reactionsList, setReactionsList] = useState([]);
  const [replyMessage, setReplyMessage] = useState();

  const {
    user: { displayName },
  } = useContext(AuthContext);

  const { setReplyMessageId } = useContext(AppContext);

  const handleShowReaction = () => {
    setShowReaction(!showReaction);
  };

  const handleDeleleChat = () => {
    const messageRef = db.collection('messages').doc(id);
    messageRef.delete();
    message.success('Deleted');
  };

  const handleReply = () => {
    setReplyMessageId(id);
  };

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

  const getReplyMessage = (replyMessageId) => {
    const replyMessageRef = replyMessageId
      ? db.collection('messages').doc(replyMessageId)
      : null;

    replyMessageRef.get().then((doc) => {
      const docData = doc.data();
      setReplyMessage({
        user: docData.displayName === displayName ? 'you' : docData.displayName,
        message: docData.text,
      });
    });
  };

  useEffect(() => {
    replyFor && getReplyMessage(replyFor);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [replyFor]);

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
    replyMessage,
    handleShowReaction,
    onSelectReaction,
    handleShowDate,
    handleDeleleChat,
    handleReply,
  };
};
