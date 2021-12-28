import React from 'react';
import { Row, Col } from 'antd';
import { UserInfo } from '../UserInfo';
import { RoomList } from '../RoomList';
import * as S from './styles';

export const Sidebar = () => {
  return (
    <S.SideBar>
      <Row>
        <Col span={24}>
          <UserInfo />
        </Col>
        <Col span={24}>
          <RoomList />
        </Col>
      </Row>
    </S.SideBar>
  );
};
