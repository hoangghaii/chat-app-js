import {
  CloseOutlined,
  SmileOutlined,
  UserAddOutlined,
} from '@ant-design/icons/lib/icons';
import { Alert, Avatar, Button, Form, Input, Tooltip, Typography } from 'antd';
import React from 'react';
import { useChat } from '../../../features/chat';
import { Reactions } from '../../Reactions';
import Message from '../Message';
import * as S from './styles';

const { Group } = Avatar;
const { Item } = Form;
const { Text } = Typography;

export const ChatWindow = () => {
  const {
    form,
    inputRef,
    messageListRef,
    members,
    selectedRoom,
    setIsInviteMemberVisible,
    message,
    messages,
    showEmojiPicker,
    replyMessage,
    onEmojiClick,
    handleShowEmojiPicker,
    handleOnChange,
    handleOnSubmit,
    handleCloseReply,
  } = useChat();

  return (
    <S.Wrapper>
      {selectedRoom.id ? (
        <>
          <S.Header>
            <div className="header__info">
              <p className="header__title">{selectedRoom.name}</p>
              <span className="header__desc">{selectedRoom.description}</span>
            </div>
            <S.ButtonGroup>
              <Button
                icon={<UserAddOutlined />}
                type="text"
                onClick={() => setIsInviteMemberVisible(true)}
              >
                Inivte
              </Button>
              <Group size="small" maxCount={2}>
                {members.map((member) => (
                  <Tooltip key={member.id} title={member.displayName}>
                    <Avatar src={member.photoURL}>
                      {member.photoURL
                        ? ''
                        : member.displayName?.charAt(0)?.toUpperCase()}
                    </Avatar>
                  </Tooltip>
                ))}
              </Group>
            </S.ButtonGroup>
          </S.Header>
          <S.Content>
            <S.MessageList ref={messageListRef}>
              {messages.map((message) => (
                <Message key={message.id} message={message} />
              ))}
            </S.MessageList>
            {replyMessage && (
              <S.ReplyBox>
                <Button
                  className="icon-close"
                  icon={<CloseOutlined />}
                  type="text"
                  size="small"
                  onClick={handleCloseReply}
                />
                <div className="reply-info">
                  <Text>
                    Reply for <b>{replyMessage.user}</b>
                  </Text>
                  <Text type="secondary" className="reply-text">
                    {replyMessage.message}
                  </Text>
                </div>
              </S.ReplyBox>
            )}
            <S.FormStyled form={form}>
              {showEmojiPicker && (
                <Reactions
                  onEmojiClick={onEmojiClick}
                  styles={{
                    position: 'absolute',
                    width: '100%',
                    height: '270px',
                    bottom: '120%',
                  }}
                />
              )}
              <Item name="messages">
                <S.Input>
                  <Input
                    ref={inputRef}
                    value={message}
                    placeholder="Enter message..."
                    bordered={false}
                    autoComplete="off"
                    onChange={handleOnChange}
                    onPressEnter={handleOnSubmit}
                  />
                  <Button
                    icon={<SmileOutlined />}
                    type="text"
                    onClick={handleShowEmojiPicker}
                  />
                </S.Input>
              </Item>
              <Button type="primary" onClick={handleOnSubmit}>
                Send
              </Button>
            </S.FormStyled>
          </S.Content>
        </>
      ) : (
        <Alert
          message="Please choose a room"
          type="info"
          showIcon
          style={{ margin: 5 }}
          closable
        />
      )}
    </S.Wrapper>
  );
};
