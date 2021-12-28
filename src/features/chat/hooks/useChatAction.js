import { useState } from 'react';

export const useChatAction = () => {
  const [showReaction, setShowReaction] = useState(false);

  const handleShowReaction = () => {
    setShowReaction(!showReaction);
  };

  const onSelectReaction = (reaction) => {
    console.log({ reaction });
  };

  return {
    showReaction,
    handleShowReaction,
    onSelectReaction,
  };
};
