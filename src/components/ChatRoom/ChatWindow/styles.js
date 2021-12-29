import { Form } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  border-bottom: 1px solid rgb(230, 230, 230);

  .header {
    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    &_title {
      margin: 0;
      font-weight: bold;
    }

    &__desc {
      font-size: 12px;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  padding: 11px;
  justify-content: flex-end;
`;

const FormStyled = styled(Form)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 2px 2px 0;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 2px;
  position: relative;

  .ant-form-item {
    flex: 1;
    margin-bottom: 0;
  }
`;

const Input = styled.div`
  display: flex;
`;

const MessageList = styled.div`
  height: 100%;
  max-height: 100%;
  overflow-y: auto;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ReplyBox = styled.div`
  height: 80px;
  border-top: 1px solid #ced0d4;
  margin-left: -11px;
  margin-right: -11px;
  position: relative;

  .icon-close {
    position: absolute;
    right: 8px;
    top: 5px;
  }

  .reply-info {
    display: flex;
    flex-direction: column;
    margin-left: 11px;
    margin-top: 10px;
  }

  .reply-text {
    font-size: 13px;
    width: 50%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export {
  ButtonGroup,
  Header,
  Content,
  MessageList,
  FormStyled,
  Wrapper,
  Input,
  ReplyBox,
};
