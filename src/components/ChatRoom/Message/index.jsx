import {
  MoreOutlined,
  RollbackOutlined,
  SmileOutlined,
} from '@ant-design/icons/lib/icons';
import { Avatar, Button, Tooltip, Typography } from 'antd';
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context';
import { formatDate } from '../../../features/common';
import * as S from './styles';
import { FacebookSelector } from '@charkour/react-reactions';
import { useChatAction } from '../../../features/chat';
import Picker from 'emoji-picker-react';

const { Text } = Typography;

const Message = ({ text, displayName, createAt, photoUrl, userId }) => {
  const {
    user: { uid },
  } = useContext(AuthContext);

  const { showReaction, handleShowReaction, onSelectReaction } =
    useChatAction();

  return (
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
        <Tooltip placement="left" title={formatDate(createAt?.seconds)}>
          <Text className="content">{text}</Text>
        </Tooltip>
        <div className="reaction">
          {showReaction && (
            // <FacebookSelector iconSize={30} onSelect={onSelectReaction} />
            <Picker
              // onEmojiClick={onEmojiClick}
              disableSearchBar
              disableSkinTonePicker
              pickerStyle={{
                width: 400,
                height: 70,
              }}
            />
          )}
        </div>
        <div className="action__box">
          <Button
            icon={<MoreOutlined />}
            type="text"
            size="small"
            // onClick={handleShowReaction}
          />
          <Button
            icon={<RollbackOutlined />}
            type="text"
            size="small"
            // onClick={handleShowEmojiPicker}
          />
          <Button
            icon={<SmileOutlined />}
            type="text"
            size="small"
            onClick={handleShowReaction}
          />
        </div>
      </div>
    </S.Wrapper>
  );
};

Message.propTypes = {
  text: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  createAt: PropTypes.object,
  photoUrl: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
};

export default Message;
