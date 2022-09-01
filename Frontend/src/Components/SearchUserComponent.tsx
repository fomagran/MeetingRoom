import React, {useState} from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import {styles} from '../Styles/Component/SearchUserStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../Styles/Common/Colors';

interface SearchUserProps {
  name: string;
  profileImage: string;
  exist: boolean;
}

export default function SearchUserComponent({
  name,
  profileImage,
  exist,
}: SearchUserProps) {
  const [existUser, setExistUser] = useState<boolean>(exist);

  const existColor = (exist: boolean) => {
    return exist ? Colors.charcoal : Colors.blue;
  };

  return (
    <View style={styles.card}>
      <View style={styles.horizontalView}>
        <Image
          style={styles.profile}
          source={{
            uri: profileImage,
          }}
        />
        <Text style={styles.name}>{name}</Text>
        <Pressable
          onPress={() => {
            if (!existUser) {
              setExistUser(!existUser);
            }
          }}>
          <Icon
            style={{...styles.addUser, ...{color: existColor(existUser)}}}
            name={existUser ? 'md-checkmark-circle' : 'person-add'}></Icon>
        </Pressable>
      </View>
    </View>
  );
}
