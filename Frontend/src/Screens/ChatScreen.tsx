import {Text, View, FlatList, TextInput, Pressable, Image} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {ChatScreenStyles as styles} from '../Styles/Screen/ChatScreenStyles';
import io from 'socket.io-client';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../Navigation';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {
  RouteProp,
  useNavigationState,
  useRoute,
} from '@react-navigation/native';
import {ScreenEnums} from '../Models/ScreenEnums';
import MyChatCell from '../Components/MyChatCell';
import OtherChatCell from '../Components/OhterChatCell';

type ScreenRouteProp = RouteProp<RootStackParamList, ScreenEnums.Chat>;

export default function ChatScreen() {
  const [messageText, setMessageText] = useState('');
  const [serverMessages, setServerMessages] = useState([]);
  const serverMessagesList: Chat[] = [];
  const webSocket = useRef(null);
  const user = useSelector<RootState, User>(state => state.login.user);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const state = useNavigationState(state => state);
  const params = useRoute<ScreenRouteProp>().params;

  useEffect(() => {
    console.log(user);

    webSocket.current = io(`http://192.168.111.34:3001/chat`);
    webSocket.current.on('connect', () => {
      let message = {
        type: 'Welcome',
        id: user.id,
        message: `${user.name} 님이 입장하셨습니다.`,
        room: params.room,
      };

      webSocket.current.emit('welcome', message);
      console.log('Connected Server');
    });

    webSocket.current.on('message', e => {
      serverMessagesList.push(e);
      setServerMessages([...serverMessagesList]);
    });

    webSocket.current.on('welcome', e => {
      console.log('welcome', e);
      serverMessagesList.push(e);
      setServerMessages([...serverMessagesList]);
    });

    webSocket.current.on('leave', e => {
      serverMessagesList.push(e);
      setServerMessages([...serverMessagesList]);
    });

    webSocket.current.on('error', e => {
      console.log(e.message);
    });

    webSocket.current.on('disconnect', e => {
      console.log('Disconnected. Check internet or server.');
    });

    return () => {
      let message = {
        type: 'Leave',
        id: user.id,
        message: `${user.name} 님이 퇴장하셨습니다.`,
        room: params.room,
      };
      webSocket.current.emit('leave', message);
      webSocket.current.disconnect();
    };
  }, []);

  const sendMessage = () => {
    let message = {
      type: 'Chat',
      id: user.id,
      message: messageText,
      room: params.room,
    };
    webSocket.current.emit('message', message);
    setMessageText('');
  };

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
