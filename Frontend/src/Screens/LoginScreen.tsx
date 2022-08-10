import {Pressable, Text, TextInput, View, Alert} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {styles} from '../Styles/LoginStyles';
import {ScreenEnums as screens} from '../Models/ScreenEnums';
import {useGetUserByNameQuery} from '../api/UserAPISlice';

export default function LoginScreen({navigation}) {
  const [inputText, setInputText] = useState('');
  const [confirmUser, setConfirmUser] = useState('');
  const {data: user} = useGetUserByNameQuery(confirmUser);

  useEffect(() => {
    console.log(user);
    if (user === null || user === undefined) {
      showAlert();
    } else {
      navigation.navigate(screens.ChatRoom, {
        navigation: navigation,
        user: inputText,
      });
    }
  }, [user]);

  const handleLogin = () => {
    setConfirmUser(inputText);
  };

  const showAlert = () => {
    Alert.alert(
      'Alert',
      'There is no user',
      [
        {
          text: 'OK',
          onPress: () => {
            console.log('Press OK');
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={text => setInputText(text)}
        placeholder=" Enter the user name"></TextInput>
      <Pressable style={styles.loginButton} onPress={() => handleLogin()}>
        <Text style={styles.loginText}> Login </Text>
      </Pressable>
    </View>
  );
}
