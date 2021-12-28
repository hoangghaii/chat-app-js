import { PlusSquareOutlined } from '@ant-design/icons/lib/icons';
import { Button, Collapse } from 'antd';
import React, { useContext } from 'react';
import { AppContext } from '../../../Context';
import * as S from './styles';

export const RoomList = () => {
  /**
   * {
   *  name: 'room name',
   *  desc: 'mo ta',
   *  members: {uid1, uid2}
   * }
   */

  const { rooms, setIsAddRoomVisible, setSelectedRoomId } =
    useContext(AppContext);

  const handleAddRoom = () => {
    setIsAddRoomVisible(true);
  };

  return (
    <Collapse ghost defaultActiveKey={'1'}>
      <S.PanelStyled header="Rooms" key="1">
        {rooms.map((room) => (
          <S.LinkStyled
            key={room.id}
            onClick={() => setSelectedRoomId(room.id)}
          >
            {room.name}
          </S.LinkStyled>
        ))}
        <Button
          type="text"
          icon={<PlusSquareOutlined />}
          className="add-room"
          onClick={handleAddRoom}
        >
          Add Room
        </Button>
      </S.PanelStyled>
    </Collapse>
  );
};
