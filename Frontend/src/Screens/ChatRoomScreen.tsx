import React, {useEffect, useLayoutEffect, useRef} from 'react';
import {FlatList, Pressable, View} from 'react-native';
import {useSelector} from 'react-redux';
import ChatRoomCell from '../Components/ChatRoomCell';
import {ScreenEnums as screens} from '../Models/ScreenEnums';
import {RootState} from '../redux/store';
import Icon from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../Navigation';
import {styles} from '../Styles/Screen/ChatRoomStyles';
import {
  useAddChatRoomMutation,
  useGetAllChatRoomsQuery,
  useEditChatRoomMutation,
} from '../api/ChatRoomAPISlice';
import BASE_URL from '../Styles/Common/Constants';
import io from 'socket.io-client';

export function ChatRoomScreen() {
  const user = useSelector<RootState, User>(state => state.login.user);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [addChatRoom] = useAddChatRoomMutation();
  const {data: allChatRooms} = useGetAllChatRoomsQuery('');
  const webSocket = useRef(null);
  const [editChatRoom] = useEditChatRoomMutation();

  useLayoutEffect(() => {
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

  useEffect(() => {
    webSocket.current = io(BASE_URL + '/chatRoom');

    webSocket.current.on('lastChat', e => {
      if (allChatRooms !== undefined) {
        let payload: ChatRoomPayload = {
          id: '1dc59f28-9814-4cc6-a687-7c2492d0862c',
          title: '',
          userId: e.userId,
          lastChatContent: e,
          lastChatDate: new Date(),
        };
        editChatRoom(payload);
      } else {
        console.log('ChatRooms is Empty');
      }
    });

    return () => {
      webSocket.current.disconnect();
    };
  }, []);

  const handleChatRoom = async () => {
    try {
      const payload: ChatRoomPayload = {
        id: '1dc59f28-9814-4cc6-a687-7c2492d0862c',
        title: user.name,
        userId: user.id,
        lastChatContent: '',
        lastChatDate: new Date(),
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
