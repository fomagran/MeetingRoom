import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import React, {useEffect, useLayoutEffect} from 'react';
import {FlatList, Pressable, Button, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ChatRoomCell from '../Components/ChatRoomCell';
import {ScreenEnums as screens} from '../Models/ScreenEnums';
import {RootState} from '../redux/store';
import Icon from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../Navigation';
import {styles} from '../Styles/ChatRoomStyles';
import {
  useAddChatRoomMutation,
  useGetAllChatRoomsQuery,
} from '../api/ChatRoomAPISlice';

export function ChatRoomScreen() {
  const user = useSelector<RootState, User>(state => state.login.user);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();
  const [addChatRoom] = useAddChatRoomMutation();
  const {data: allChatRooms} = useGetAllChatRoomsQuery('');

  useLayoutEffect(() => {
    console.log(allChatRooms);

    navigation.setOptions({
      headerRight: () => (
        <Pressable
          onPress={() => {
            handleChatRoom();
            console.log('press plus');
          }}>
          <Icon style={styles.plus} name="plus-a"></Icon>
        </Pressable>
      ),
    });
  }, [navigation]);

  const handleChatRoom = async () => {
    try {
      const payload: ChatRoomPayload = {
        title: user.name,
        userId: user.id,
        chatId: '',
      };
      const chatRoom = await addChatRoom(payload).unwrap();
      console.log(chatRoom);
      if (chatRoom !== null || chatRoom !== undefined) {
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View>
      <FlatList
        contentContainerStyle={{paddingBottom: 50}}
        data={allChatRooms}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Pressable
            onPress={() => {
              navigation.navigate(screens.Chat, {room: item.chatRoomId});
            }}>
            <ChatRoomCell chatRoom={item}></ChatRoomCell>
          </Pressable>
        )}
      />
    </View>
  );
}
