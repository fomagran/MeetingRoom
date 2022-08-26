import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from '../Styles/Component/UserComponentStyles';

interface UserComponentParams {
  name: string;
}

export default function UserComponent({name}: UserComponentParams) {
  return (
    <View style={styles.card}>
      <View style={styles.horizontalView}>
        <Image
          style={styles.profile}
          source={{
            uri: 'https://user-images.githubusercontent.com/47676921/184225841-398db1c2-8c60-4223-8dbc-0e8f8892934d.jpg',
          }}
        />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.nameDetail}>something is here...</Text>
        </View>
      </View>
    </View>
  );
}
