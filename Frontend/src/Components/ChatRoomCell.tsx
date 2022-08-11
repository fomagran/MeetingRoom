import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../Styles/ChaRoomCellStyles';

interface ChatRoomCellParams {
  chatRoom: ChatRoom;
}

export default function ChatRoomCell({chatRoom}: ChatRoomCellParams) {
  useEffect(() => {
    console.log(chatRoom);
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {chatRoom.title} </Text>
      <Text style={styles.message}>
        {' '}
        {chatRoom.lastChat == undefined ? '' : chatRoom.lastChat.content}{' '}
      </Text>
      <Text style={styles.time}>
        {' '}
        {chatRoom.lastChat == undefined
          ? ''
          : chatRoom.lastChat.createdAt.toString()}{' '}
      </Text>
    </View>
  );
}
