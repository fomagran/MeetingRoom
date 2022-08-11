import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../Styles/ChaRoomCellStyles';

interface ChatRoomCellParams {
  chatRoom: ChatRoom;
}

export default function ChatRoomCell({chatRoom}: ChatRoomCellParams) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {chatRoom.title} </Text>
      <Text style={styles.message}>
        {' '}
        {chatRoom.lastChat == undefined
          ? '아직 주고 받은 메세지가 없습니다.'
          : chatRoom.lastChat.content}{' '}
      </Text>
      <Text style={styles.time}>
        {' '}
        {chatRoom.lastChat == undefined
          ? new Date().toISOString()
          : chatRoom.lastChat.createdAt.toString()}{' '}
      </Text>
    </View>
  );
}
