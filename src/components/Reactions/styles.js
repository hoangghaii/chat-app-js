import styled from 'styled-components';

const ReationsStyled = styled.div`
  .content-wrapper {
    &::before {
      display: none !important;
    }
  }

  .emoji-scroll-wrapper {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .emoji-picker-react .active-category-indicator-wrapper {
    display: none !important;
  }
`;

export { ReationsStyled };
