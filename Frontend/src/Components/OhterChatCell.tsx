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
    '3017b540-4c26-4dae-b3f4-63740895aa24': [
      'Beenzino',
      'https://user-images.githubusercontent.com/47676921/184252230-a912f918-f5ac-4764-98f4-268c571f0793.jpg',
    ],
    '8a387ebb-da8c-44e1-862f-53875e5d3deb': [
      'Fomagran',
      'https://user-images.githubusercontent.com/47676921/184225834-21439481-c2e6-43f3-b09c-99d32e88368a.jpg',
    ],
    '6313c9ef-e51d-4430-914b-2a183d289ca1': [
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
