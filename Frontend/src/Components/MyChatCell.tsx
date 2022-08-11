import React, {useEffect} from 'react';
import {Text, View, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {styles} from '../Styles/MyChatStyles';

interface ChatProps {
  chat: any;
}

export default function MyChatCell({chat}: ChatProps) {
  const user = useSelector<RootState, User>(state => state.login.user);

  return (
    <View style={styles.container}>
      <Image style={styles.profile} source={{uri: user.profileImage}} />
      <View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.myChat}>{chat.message}</Text>
      </View>
    </View>
  );
}
