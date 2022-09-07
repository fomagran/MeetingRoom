import {Pressable, Text, TextInput, View, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from '../Styles/Screen/LoginStyles';
import {ScreenEnums as screens} from '../Models/ScreenEnums';
import {
  useGetAllUsersQuery,
  useGetUserByNameMutation,
} from '../API/UserAPISlice';
import loginSlice from '../Redux/LoginSlice';
import appSlice from '../Redux/AppSlice';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../Navigation';
import {useGetConnectedUserMutation} from '../API/ConnectedUserAPISlice';
import {useAddUserMutation} from '../API/ConnectedUserAPISlice';

export default function LoginScreen() {
  //MARK: - Properties

  const [inputText, setInputText] = useState<string>('');
  const dispatch = useDispatch();
  const [login] = useGetUserByNameMutation();
  const actions = loginSlice.actions;
  const appActions = appSlice.actions;
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const allUsers = useGetAllUsersQuery('').data;
  const [getConnectedUsersMutation] = useGetConnectedUserMutation();
  const [addUser] = useAddUserMutation();

  //MARK: - Life Cycle

  useEffect(() => {
    if (allUsers !== undefined) {
      dispatch(appActions.loadedAllUsers({allUsers: allUsers}));
    }
  }, [allUsers]);

  //MARK: - Functions

  const handleLogin = async () => {
    try {
      const user = await login(inputText).unwrap();
      if (user === null || user === undefined) {
        showAlert();
      } else {
        let payload: LoginPayload = {isLogin: true, user: user};
        dispatch(actions.loginSuccess(payload));
        getConnectedUsers(user);
        navigation.navigate(screens.BottomTab);
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

  async function getConnectedUsers(currentUser: User) {
    try {
      const connectedUsers = await getConnectedUsersMutation(
        currentUser.id,
      ).unwrap();

      const connectedUserIds = connectedUsers.map(user => user.connected.id);

      for (let user of allUsers) {
        //현재 부서 중 자신을 제외한 사람이 친구로 등록되어 있지 않은 경우
        if (
          user.department == currentUser.department &&
          user.id != currentUser.id &&
          !connectedUserIds.includes(user.id)
        ) {
          addUser({
            id: '',
            userId: currentUser.id,
            connectedUserId: user.id,
            connected: undefined,
          });
        }
      }
    } catch (err) {
      console.log(err);
    }
  }

  //MARK: - View

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
