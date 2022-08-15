import React from 'react';
import {Text, View, Image} from 'react-native';
import {styles} from '../Styles/Component/OtherChatStyles';

interface ChatProps {
  chat: any;
}

interface Dictionary {
  [key: string]: string[];
}

export default function OtherChatCell({chat}: ChatProps) {
  let users: Dictionary = {
    '37ab111b-e197-4132-8d4f-8dee3d284010': [
      'Beenzino',
      'https://user-images.githubusercontent.com/47676921/184252230-a912f918-f5ac-4764-98f4-268c571f0793.jpg',
    ],
    '3ecf28c3-ea27-406d-a0fe-485e33aaa890': [
      'Fomagran',
      'https://user-images.githubusercontent.com/47676921/184225834-21439481-c2e6-43f3-b09c-99d32e88368a.jpg',
    ],
    'e5528619-0cb3-4031-87cb-b63afe97e17a': [
      'Khalid',
      'https://user-images.githubusercontent.com/47676921/184225841-398db1c2-8c60-4223-8dbc-0e8f8892934d.jpg',
    ],
  };

  return (
    <View style={styles.container}>
      <Image style={styles.profile} source={{uri: users[chat.id][1]}} />
      <View>
        <Text style={styles.name}>{users[chat.id][0]}</Text>
        <Text style={styles.otherChat}>{chat.message}</Text>
      </View>
    </View>
  );
}
