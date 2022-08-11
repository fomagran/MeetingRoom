import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import React, {useEffect, useLayoutEffect} from 'react';
import {FlatList, Pressable, Button, View} from 'react-native';
import {useSelector} from 'react-redux';
import ChatRoomCell from '../Components/ChatRoomCell';
import {ScreenEnums as screens} from '../Models/ScreenEnums';
import {RootState} from '../redux/store';
import {Icon} from 'react-native-vector-icons';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../Navigation';

export function ChatRoomScreen() {
  const user = useSelector<RootState, User>(state => state.login.user);
  const mockData: ChatRoom[] = [];
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  // useLayoutEffect(() => {
  //   route.params.navigation.setOptions({
  //     headerRight: () => <Button onPress={() => {}} title="Update count" />,
  //   });
  // }, [route.params.navigation]);

  return (
    <View>
      <FlatList
        contentContainerStyle={{paddingBottom: 50}}
        data={mockData}
        keyExtractor={item => item.lastMessage}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigation.navigate(screens.Chat, {room: 'A'});
            }}>
            <ChatRoomCell chatRoom={item}></ChatRoomCell>
          </Pressable>
        )}
      />
    </View>
  );
}
