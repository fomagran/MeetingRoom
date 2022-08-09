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
    {title: '', lastMessage: '', time: new Date()},
    {title: '', lastMessage: '', time: new Date()},
    {title: '', lastMessage: '', time: new Date()},
  ];

  return (
    <View>
      <FlatList
        contentContainerStyle={{paddingBottom: 50}}
        data={mockData}
        keyExtractor={item => item.title}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              console.log(route.params);

              route.params.navigation.navigate(screens.Chat, {
                user: route.params.user,
              });
            }}>
            <ChatRoomCell></ChatRoomCell>
          </Pressable>
        )}
      />
    </View>
  );
}
