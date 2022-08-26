import {Pressable, Text, TextInput, View, Alert} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../Styles/Screen/LoginStyles';
import {ScreenEnums as screens} from '../Models/ScreenEnums';
import {useGetUserByNameMutation} from '../api/UserAPISlice';
import loginSlice from '../redux/LoginSlice';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../Navigation';

export default function LoginScreen() {
  const [inputText, setInputText] = useState<string>('');
  const dispatch = useDispatch();
  const [login] = useGetUserByNameMutation();
  const actions = loginSlice.actions;
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleLogin = async () => {
    try {
      const user = await login(inputText).unwrap();
      if (user === null || user === undefined) {
        showAlert();
      } else {
        let payload: LoginPayload = {isLogin: true, user: user};
        dispatch(actions.loginSuccess(payload));
        navigation.navigate(screens.UserList);
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
