import Picker from 'emoji-picker-react';
import React from 'react';
import * as S from './styles';

export const Reactions = ({ onEmojiClick, styles }) => {
  return (
    <S.ReationsStyled>
      <Picker
        disableSearchBar
        disableSkinTonePicker
        onEmojiClick={onEmojiClick}
        pickerStyle={styles}
      />
    </S.ReationsStyled>
  );
};
