import {
  DeleteOutlined,
  RollbackOutlined,
  SmileOutlined,
} from '@ant-design/icons/lib/icons';
import { Avatar, Button, Popconfirm, Typography } from 'antd';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context';
import { useMessage } from '../../../features/chat';
import { formatDate } from '../../../features/common';
import { Reactions } from '../../Reactions';
import * as S from './styles';

const { Text } = Typography;

const Message = ({ message }) => {
  const {
    user: { uid },
  } = useContext(AuthContext);

  const {
    id,
    text,
    displayName,
    createdAt,
    photoUrl,
    uid: userId,
    reactions,
    replyFor,
  } = message;

  const {
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
  } = useMessage({ id, reactions, replyFor });

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
        {replyMessage && (
          <S.ReplyBox>
            <div className="reply-user__box">
              <RollbackOutlined />
              <Text>Reply for {replyMessage.user}</Text>
            </div>
            <Text type="secondary" className="reply-text">
              {replyMessage.message}
            </Text>
          </S.ReplyBox>
        )}
        <div className="content__box">
          <div className="content__date">
            <div className="content__info--box">
              <div className={contentInfoClassName}>
                <Text className="content" onClick={handleShowDate}>
                  {text}
                </Text>
                <div className="action__box">
                  <Popconfirm
                    title="Are you sure to delete this task?"
                    onConfirm={handleDeleleChat}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button
                      icon={<DeleteOutlined />}
                      type="text"
                      size="small"
                    />
                  </Popconfirm>
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
                {formatDate(createdAt?.seconds)}
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
    </>
  );
};

Message.propTypes = {
  message: PropTypes.object.isRequired,
};

export default Message;
