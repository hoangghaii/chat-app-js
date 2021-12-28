import { Avatar, Button, Typography } from 'antd';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context';
import { auth } from '../../../firebase/config';
import * as S from './styles';

const { Text } = Typography;

export const UserInfo = () => {
  const {
    user: { displayName, photoURL },
  } = useContext(AuthContext);

  return (
    <S.Wrapper>
      <div>
        <Avatar src={photoURL}>
          {photoURL ? '' : displayName?.charAt(0)?.toUpperCase()}
        </Avatar>
        <Text className="userName">{displayName}</Text>
      </div>
      <Button ghost onClick={() => auth.signOut()}>
        Logout
      </Button>
    </S.Wrapper>
  );
};
