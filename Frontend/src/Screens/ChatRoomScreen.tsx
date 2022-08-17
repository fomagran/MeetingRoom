import React, {useEffect, useLayoutEffect, useRef} from 'react';
import {
  FlatList,
  Pressable,
  View,
  Animated,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useSelector} from 'react-redux';
import ChatRoomCell from '../Components/ChatRoomCell';
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
import {Swipeable, GestureHandlerRootView} from 'react-native-gesture-handler';
import {ScreenEnums as screens} from '../Models/ScreenEnums';
import {useDeleteChatRoomMutation} from '../api/ChatRoomAPISlice';

export function ChatRoomScreen() {
  const user = useSelector<RootState, User>(state => state.login.user);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [addChatRoom] = useAddChatRoomMutation();
  const {data: allChatRooms} = useGetAllChatRoomsQuery('');
  const webSocket = useRef(null);
  const [editChatRoom] = useEditChatRoomMutation();
  const [deleteChatRoom] = useDeleteChatRoomMutation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          onPress={() => {
            handleCreateChatRoom();
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
          id: e.chatRoomId,
          title: '',
          userId: e.userId,
          lastChatContent: e.lastChatContent,
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

  const handleCreateChatRoom = async () => {
    try {
      const payload: ChatRoomPayload = {
        id: '',
        title: user.name + "' room",
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

  const renderRightActions = (dragX, id) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <Pressable onPress={() => deleteChatRoom(id)}>
        <Animated.Text
          style={[
            styles.delete,
            {
              transform: [{translateX: trans}],
            },
          ]}>
          Delete
        </Animated.Text>
      </Pressable>
    );
  };

  return (
    <View>
      <FlatList
        contentContainerStyle={{paddingBottom: 50}}
        data={allChatRooms}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <GestureHandlerRootView>
            <Swipeable
              key={item.id}
              renderRightActions={dragx => renderRightActions(dragx, item.id)}>
              <Pressable
                onPress={() => {
                  navigation.navigate(screens.Chat, {room: item.id});
                }}>
                <ChatRoomCell chatRoom={item}></ChatRoomCell>
              </Pressable>
            </Swipeable>
          </GestureHandlerRootView>
        )}
      />
    </View>
  );
}
