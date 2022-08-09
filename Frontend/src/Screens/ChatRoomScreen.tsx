import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import React from 'react';
import {FlatList, Pressable, Text, View} from 'react-native';
import ChatRoomCell from '../Components/ChatRoomCell';
import {ScreenEnums as screens} from '../Models/ScreenEnums';

type ChatRoomParams = {
  route: {
    params: {
      navigation: any;
      user: string;
    };
  };
};

type Navigation = NativeStackHeaderProps & ChatRoomParams;

export function ChatRoomScreen({route}: Navigation) {
  const mockData: ChatRoom[] = [
    {title: 'A', lastMessage: '', time: new Date()},
    {title: 'B', lastMessage: '', time: new Date()},
    {title: 'C', lastMessage: '', time: new Date()},
  ];

  return (
    <View>
      <FlatList
        contentContainerStyle={{paddingBottom: 50}}
        data={mockData}
        keyExtractor={item => item.lastMessage}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              route.params.navigation.navigate(screens.Chat, {
                user: route.params.user,
                room: item.title,
              });
            }}>
            <ChatRoomCell></ChatRoomCell>
          </Pressable>
        )}
      />
    </View>
  );
}
