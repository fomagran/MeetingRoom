import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TextInput,
  Pressable,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {getUniqueId} from 'react-native-device-info';

interface Message {
  user: string;
  message: string;
}

const ChatScreen = () => {
  const [serverState, setServerState] = useState('Loading...');
  const [messageText, setMessageText] = useState('');
  const [disableButton, setDisableButton] = useState(true);
  const [inputFieldEmpty, setInputFieldEmpty] = useState(true);
  const [serverMessages, setServerMessages] = useState([]);
  let id = getUniqueId();
  const ws = useRef(null);
  useEffect(() => {
    ws.current = new WebSocket(`ws://192.168.111.34:3001`);

    const serverMessagesList: Message[] = [];

    ws.current.onopen = () => {
      setServerState('Connected to the server');
      setDisableButton(false);
    };

    ws.current.onmessage = e => {
      let parse = JSON.parse(e.data);
      serverMessagesList.push(parse);
      setServerMessages([...serverMessagesList]);
    };

    ws.current.onerror = e => {
      setServerState(e.message);
    };

    ws.current.onclose = e => {
      setServerState('Disconnected. Check internet or server.');
      setDisableButton(true);
    };

    return () => {
      ws.current.close();
    };
  }, []);

  const submitMessage = () => {
    let str = JSON.stringify({user: id, message: messageText});
    ws.current.send(str);
    setMessageText('');
    setInputFieldEmpty(true);
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
            item.user == id ? (
              <View style={{backgroundColor: 'blue'}}>
                <Text>{item.message}</Text>
              </View>
            ) : (
              <View style={{backgroundColor: 'red'}}>
                <Text>{item.message}</Text>
              </View>
            )
          }
        />
      </View>

      <TextInput
        style={{
          borderWidth: 1,
          borderColor: 'black',
          padding: 10,
        }}
        placeholder={'Add Message'}
        onChangeText={text => {
          setMessageText(text);
          setInputFieldEmpty(text.length > 0 ? false : true);
        }}
        value={messageText}></TextInput>
      <Pressable
        onPress={submitMessage}
        disabled={disableButton || inputFieldEmpty}>
        <Text style={styles.submit}>Submit</Text>
      </Pressable>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    padding: 8,
  },
  submit: {
    backgroundColor: 'black',
    color: 'white',
    padding: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  list: {
    height: '80%',
  },
});
