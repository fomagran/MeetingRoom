import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from '../Styles/Component/UserComponentStyles';

interface UserComponentParams {
  name: string;
  imageURI: string;
}

export default function UserComponent({name, imageURI}: UserComponentParams) {
  return (
    <View style={styles.card}>
      <View style={styles.horizontalView}>
        <Image
          style={styles.profile}
          source={{
            uri: imageURI,
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
