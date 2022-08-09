import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../Styles/ChaRoomCellStyles';

export default function ChatRoomCell() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> 안녕하세요. </Text>
      <Text style={styles.message}> 저는 안녕훈입니다. </Text>
      <Text style={styles.time}> 2022/08/09 </Text>
    </View>
  );
}
