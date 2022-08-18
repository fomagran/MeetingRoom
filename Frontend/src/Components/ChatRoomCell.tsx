import React from 'react';
import {Text, View, Image} from 'react-native';
import {styles} from '../Styles/Component/ChaRoomCellStyles';
import Icon from 'react-native-vector-icons/Fontisto';

interface ChatRoomCellParams {
  chatRoom: ChatRoom;
}

export default function ChatRoomCell({chatRoom}: ChatRoomCellParams) {
  return (
    <View style={styles.container}>
      {chatRoom.hasNewMessage ? <View style={styles.redDot}></View> : <></>}

      <Image
        style={styles.profile}
        source={{
          uri: 'https://user-images.githubusercontent.com/47676921/184252230-a912f918-f5ac-4764-98f4-268c571f0793.jpg',
        }}
      />
      <View style={{marginLeft: 10, flex: 1}}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}> {chatRoom.title} </Text>
          {chatRoom.isPrivate ? (
            <Icon name="locked" style={styles.private}></Icon>
          ) : (
            <></>
          )}
        </View>
        <Text style={styles.message}>
          {' '}
          {chatRoom.lastChatContent == undefined
            ? '아직 주고 받은 메세지가 없습니다.'
            : chatRoom.lastChatContent}{' '}
        </Text>
        <Text style={styles.time}>
          {' '}
          {chatRoom.lastChatDate == undefined
            ? new Date().toISOString()
            : chatRoom.lastChatDate.toString()}{' '}
        </Text>
      </View>
      <Icon name="persons" style={styles.users}></Icon>
      <Text style={styles.numberOfUsers}>{chatRoom.numberOfUsers}</Text>
    </View>
  );
}
