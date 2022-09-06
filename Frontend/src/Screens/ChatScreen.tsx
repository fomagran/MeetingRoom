import {Text, View, FlatList, TextInput, Pressable} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {ChatScreenStyles as styles} from '../Styles/Screen/ChatScreenStyles';
import io from 'socket.io-client';
import {RootStackParamList} from '../Navigation';
import {useSelector} from 'react-redux';
import {RootState} from '../Redux/store';
import {RouteProp, useRoute} from '@react-navigation/native';
import {ScreenEnums} from '../Models/ScreenEnums';
import MyChatCell from '../Components/MyChatCell';
import OtherChatCell from '../Components/OhterChatCell';
import {BASE_URL} from '../Constants';
import {useAddChatMutation} from '../API/ChatAPISlice';
import {
  useAddReadDatesMutation,
  useEditReadDatesMutation,
} from '../API/readDatesAPISlice';

type ScreenRouteProp = RouteProp<RootStackParamList, ScreenEnums.Chat>;

export default function ChatScreen() {
  //MARK: - Properties

  const [messageText, setMessageText] = useState('');
  const [serverMessages, setServerMessages] = useState([]);
  const serverMessagesList: Chat[] = [];
  const chatSocket = useRef(null);
  const chatRoomSocket = useRef(null);
  const user = useSelector<RootState, User>(state => state.login.user);
  const params = useRoute<ScreenRouteProp>().params;
  const [addChat] = useAddChatMutation();
  const [addReadDates] = useAddReadDatesMutation();
  const [editReadDates] = useEditReadDatesMutation();

  //MARK: - Life Cycle

  useEffect(() => {
    // const readDates: ReadDates = {
    //   id: '',
    //   userId: user.id,
    //   chatRoomId: params.room,
    //   readDate: new Date(),
    // };
    // addReadDates(readDates);

    editReadDates({
      id: '',
      userId: user.id,
      chatRoomId: params.room,
      readDate: new Date(),
    });

    chatSocket.current = io(BASE_URL + '/chat');
    chatRoomSocket.current = io(BASE_URL + '/chatRoom');

    chatSocket.current.on('connect', () => {
      let message = {
        type: 'Welcome',
        id: user.id,
        message: `${user.name} 님이 입장하셨습니다.`,
        room: params.room,
      };

      chatSocket.current.emit('welcome', message);
      console.log('Connected Server');
    });

    chatSocket.current.on('message', e => {
      serverMessagesList.push(e);
      setServerMessages([...serverMessagesList]);
    });

    chatSocket.current.on('welcome', e => {
      serverMessagesList.push(e);
      setServerMessages([...serverMessagesList]);
    });

    chatSocket.current.on('leave', e => {
      serverMessagesList.push(e);
      setServerMessages([...serverMessagesList]);
    });

    chatSocket.current.on('error', e => {
      console.log(e.message);
    });

    chatSocket.current.on('disconnect', e => {
      console.log('Disconnected. Check internet or server.');
    });

    return () => {
      let message = {
        type: 'Leave',
        id: user.id,
        message: `${user.name} 님이 퇴장하셨습니다.`,
        room: params.room,
      };
      chatSocket.current.emit('leave', message);
      chatSocket.current.disconnect();
    };
  }, []);

  //MARK: - Functions

  const sendMessage = () => {
    let message = {
      type: 'Chat',
      id: user.id,
      message: messageText,
      room: params.room,
    };
    chatSocket.current.emit('message', message);
    chatRoomSocket.current.emit('lastChat', {
      chatRoomId: params.room,
      lastChatContent: messageText,
    });
    setMessageText('');
  };

  const add = async () => {
    try {
      const payload: ChatPayload = {
        content: messageText,
        type: 'MESSAGE',
        isImage: false,
        userId: user.id,
        chatRoomId: '3209f369-1563-447b-b4a6-954f1c943b54',
      };

      const chat = await addChat(payload).unwrap();
    } catch (err) {
      console.log('Error', err);
    }
  };

  //MARK: - View

  return (
    <View>
      <View
        style={{
          padding: 5,
          flexGrow: 1,
        }}>
        <FlatList
          style={styles.list}
          contentContainerStyle={{paddingBottom: 50}}
          data={serverMessages}
          keyExtractor={(item, index) => item.message + index}
          renderItem={({item}) =>
            item.type == 'Welcome' || item.type == 'Leave' ? (
              <Text style={styles.welcomeChat}>{item.message}</Text>
            ) : item.id == user.id ? (
              <MyChatCell chat={item}></MyChatCell>
            ) : (
              <OtherChatCell chat={item}></OtherChatCell>
            )
          }
        />
      </View>
      <View style={styles.bottomContainer}>
        <TextInput
          style={styles.input}
          placeholder={'Add Message'}
          onChangeText={text => {
            setMessageText(text);
          }}
          value={messageText}></TextInput>
        <Pressable onPress={sendMessage} disabled={messageText == ''}>
          <Text style={styles.send}>Send</Text>
        </Pressable>
      </View>
    </View>
  );
}
