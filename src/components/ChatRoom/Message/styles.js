import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 10px 0;
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
    top: -45px;
    right: ${(props) => (props.authAuthor ? 0 : 'unset')};
    z-index: 1;

    .emoji-categories {
      display: none;
    }

    .emoji-group {
      &::before {
        display: none;
      }
    }
  }

  .action {
    &__box {
      position: absolute;
      bottom: 0;
      right: 0;
      transition: all 0.15s ease;
      opacity: 0;
      visibility: hidden;

      .ant-btn-icon-only {
        border-radius: 100%;
      }
    }
  }

  .content {
    margin-left: 25px;
    padding: 8px 12px;
    border-radius: 14px;
    color: ${(props) => (props.authAuthor ? 'white' : '#050505')};
    background: ${(props) => (props.authAuthor ? '#3e85ff' : '#e5e6eb')};

    &__box {
      position: relative;
      transition: all 0.3s ease;

      &:hover {
        margin-bottom: 25px;

        .action__box {
          bottom: -28px;
          opacity: 1;
          visibility: visible;
        }
      }
    }
  }
`;

export { Wrapper };
