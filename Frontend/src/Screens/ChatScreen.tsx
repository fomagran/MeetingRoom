import {Text, View, FlatList, TextInput, Pressable} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {getUniqueId} from 'react-native-device-info';
import {ChatScreenStyles as styles} from '../Styles/ChatScreenStyles';
import io from 'socket.io-client';

const ChatScreen = () => {
  const [serverState, setServerState] = useState('Loading...');
  const [messageText, setMessageText] = useState('');
  const [serverMessages, setServerMessages] = useState([]);
  let userId = getUniqueId();
  const serverMessagesList: Message[] = [];
  const webSocket = useRef(null);

  useEffect(() => {
    webSocket.current = io(`http://192.168.111.34:3001`);

    webSocket.current.on('connect', () => {
      setServerState('Connected Server');
    });

    webSocket.current.on('message', e => {
      let parse = JSON.parse(e);
      serverMessagesList.push(parse);
      setServerMessages([...serverMessagesList]);
    });

    webSocket.current.on('error', e => {
      console.log(e.message);
      setServerState(e.message);
    });

    webSocket.current.on('disconnect', e => {
      setServerState('Disconnected. Check internet or server.');
    });

    return () => [webSocket.current.disconnect()];
  }, []);

  const sendMessage = () => {
    let str = JSON.stringify({user: userId, message: messageText});
    webSocket.current.emit('message', str);
    setMessageText('');
  };

  return (
    <View>
      <Text>{serverState}</Text>
      <View
        style={{
          padding: 5,
          flexGrow: 1,
        }}>
        <FlatList
          style={styles.list}
          contentContainerStyle={{paddingBottom: 50}}
          data={serverMessages}
          keyExtractor={item => item.id}
          renderItem={({item}) =>
            item.user == userId ? (
              <Text style={styles.myChat}>{item.message}</Text>
            ) : (
              <Text style={styles.otherChat}>{item.message}</Text>
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
};

export default ChatScreen;
