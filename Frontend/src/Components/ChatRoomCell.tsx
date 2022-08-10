import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../Styles/ChaRoomCellStyles';

interface ChatRoomCellParams {
  chatRoom: ChatRoom;
}

export default function ChatRoomCell({chatRoom}: ChatRoomCellParams) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {chatRoom.title} </Text>
      <Text style={styles.message}> {chatRoom.lastChat.content} </Text>
      <Text style={styles.time}>
        {' '}
        {chatRoom.lastChat.createdAt.toString()}{' '}
      </Text>
    </View>
  );
}
