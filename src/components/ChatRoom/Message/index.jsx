import {
  DeleteOutlined,
  RollbackOutlined,
  SmileOutlined,
} from '@ant-design/icons/lib/icons';
import { Avatar, Button, Typography } from 'antd';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context';
import { useChatAction } from '../../../features/chat';
import { formatDate } from '../../../features/common';
import { DeleteMessageModal } from '../../Modals/DeleteMessageModal';
import { Reactions } from '../../Reactions';
import * as S from './styles';

const { Text } = Typography;

const Message = ({
  id,
  text,
  displayName,
  createAt,
  photoUrl,
  userId,
  reactions,
}) => {
  const {
    user: { uid },
  } = useContext(AuthContext);

  const {
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
  } = useChatAction({ id, reactions });

  return (
    <>
      <S.Wrapper authAuthor={userId === uid}>
        {userId !== uid && (
          <div className="message-info">
            <Avatar size="small" src={photoUrl}>
              {photoUrl ? '' : displayName?.charAt(0)?.toUpperCase()}
            </Avatar>
            <Text className="author">{displayName}</Text>
          </div>
        )}
        <div className="content__box">
          <div className="content__date">
            <div className="content__info--box">
              <div className={contentInfoClassName}>
                <Text className="content" onClick={handleShowDate}>
                  {text}
                </Text>
                <div className="action__box">
                  <Button
                    icon={<DeleteOutlined />}
                    type="text"
                    size="small"
                    onClick={handleChatModal}
                  />
                  <Button
                    icon={<RollbackOutlined />}
                    type="text"
                    size="small"
                    onClick={handleReply}
                  />
                  <Button
                    icon={<SmileOutlined />}
                    type="text"
                    size="small"
                    onClick={handleShowReaction}
                  />
                </div>
              </div>
              <Text className={dateClassName}>
                {formatDate(createAt?.seconds)}
              </Text>
            </div>
            <div className="reaction__list">
              {reactionsList &&
                reactionsList.map((reaction, idx) => {
                  return (
                    <Text key={idx} className="reaction__icon">
                      {reaction.icon} {reaction.count}
                    </Text>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="reaction">
          {showReaction && (
            <Reactions
              onEmojiClick={onSelectReaction}
              styles={{ width: 300, height: 270 }}
            />
          )}
        </div>
      </S.Wrapper>
      <DeleteMessageModal
        isOpenDeleteModal={isOpenDeleteModal}
        handleDeleleChat={handleDeleleChat}
        handleChatModal={handleChatModal}
      />
    </>
  );
};

Message.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  createAt: PropTypes.object,
  photoUrl: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  reactions: PropTypes.array,
};

export default Message;
