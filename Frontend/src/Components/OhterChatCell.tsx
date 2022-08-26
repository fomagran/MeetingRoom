import React from 'react';
import {Text, View, Image} from 'react-native';
import {styles} from '../Styles/Component/OtherChatStyles';
import {USERS_IMAGE_URL} from '../Constants';

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
      USERS_IMAGE_URL['Beenzino'],
    ],
    '8a387ebb-da8c-44e1-862f-53875e5d3deb': [
      'Fomagran',
      USERS_IMAGE_URL['Fomagran'],
    ],
    '6313c9ef-e51d-4430-914b-2a183d289ca1': [
      'Khalid',
      USERS_IMAGE_URL['Khalid'],
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
