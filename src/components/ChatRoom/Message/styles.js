import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;

  padding: 3px 0px;

  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.authAuthor ? 'flex-end' : 'flex-start')};

  .message-info {
    margin-bottom: 5px;
  }

  .author {
    margin-left: 5px;
    font-weight: bold;
  }

  .reaction {
    position: absolute;
    top: -100%;
    left: ${(props) => (props.authAuthor ? '24%' : 'unset')};
    right: ${(props) => (props.authAuthor ? 'unset' : '22%')};
    z-index: 1;

    &__list {
      display: flex;
      gap: 5px;
      flex-wrap: wrap;
      width: 50%;
      justify-content: ${(props) =>
        props.authAuthor ? ' flex-end' : ' flex-start'};
    }

    &__icon {
      background: white;
      padding: 2px 5px;
    }

    .emoji-categories {
      display: none;
    }
  }

  .action {
    &__box {
      width: 72px;

      order: ${(props) => (props.authAuthor ? '-1' : 'unset')};
      transform: ${(props) => (props.authAuthor ? 'unset' : 'scaleX(-1)')};

      opacity: 0;
      visibility: hidden;
      transition: all 0.15s ease;

      .ant-btn-icon-only {
        border-radius: 100%;
      }
    }
  }

  .content {
    max-width: 230px;
    padding: 6px 12px;
    border-radius: 18px;
    color: ${(props) => (props.authAuthor ? 'white' : '#050505')};
    background: ${(props) => (props.authAuthor ? '#3e85ff' : '#e5e6eb')};
    cursor: pointer;

    &__info {
      display: flex;
      align-items: center;
      margin-bottom: -16px;
      transition: all 0.25s ease;

      &--js {
        margin-bottom: 0;
      }

      &:hover {
        .action__box {
          opacity: 1;
          visibility: visible;
        }
      }

      &--box {
        display: flex;
        flex-direction: column;
        align-items: ${(props) =>
          props.authAuthor ? 'flex-end' : 'flex-start'};
      }
    }

    &__box {
      display: flex;
      align-items: center;

      position: relative;
    }

    &__date {
      display: flex;
      flex-direction: column;
      align-items: ${(props) => (props.authAuthor ? 'flex-end' : 'flex-start')};
      margin-left: ${(props) => (props.authAuthor ? 0 : '22px')};

      position: relative;
    }
  }

  .date {
    font-size: 12px;
    transition: all 0.25s;
    width: max-content;

    opacity: 0;
    visibility: hidden;
    transition: all 0.25s ease;

    &--js {
      opacity: 1;
      visibility: visible;
    }
  }
`;

const ReplyBox = styled.div`
  position: relative;
  top: 11px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .reply-user__box {
    display: flex;
    align-items: center;

    span {
      color: #8a8d91;
    }

    .anticon {
      margin-right: 4px;
      font-size: 11px;
    }

    .ant-typography {
      font-size: 12px;
    }
  }

  .reply-text {
    color: #65676b;
    background: #f6f9fa;
    border-radius: 20px;
    padding: 6px 14px 12px 14px;
    font-size: 13px;
    max-width: 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export { Wrapper, ReplyBox };
