import {Pressable, Text, TextInput, View, Alert} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../Styles/LoginStyles';
import {ScreenEnums as screens} from '../Models/ScreenEnums';
import {useGetUserByNameMutation} from '../api/UserAPISlice';

export default function LoginScreen({navigation}) {
  const [inputText, setInputText] = useState<string>('');
  const [login] = useGetUserByNameMutation();

  const handleLogin = async () => {
    try {
      const user = await login(inputText).unwrap();
      if (user === null || user === undefined) {
        showAlert();
      } else {
        navigation.navigate(screens.ChatRoom, {
          navigation: navigation,
          user: inputText,
        });
      }
    } catch (err) {
      console.log(err);
    }
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
        onChangeText={text => {
          setInputText(text);
        }}
        placeholder=" Enter the user name"></TextInput>
      <Pressable style={styles.loginButton} onPress={() => handleLogin()}>
        <Text style={styles.loginText}> Login </Text>
      </Pressable>
    </View>
  );
}
