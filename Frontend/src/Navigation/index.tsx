import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import LoginScreen from '../Screens/LoginScreen';
import ChatScreen from '../Screens/ChatScreen';
import {ChatRoomScreen} from '../Screens/ChatRoomScreen';
import {ScreenEnums as screens} from '../Models/ScreenEnums';
import UserListScreen from '../Screens/UserListScreen';
import InvitationScreen from '../Screens/InvitationScreen';
import UserSearchListScreen from '../Screens/UserSearchListScreen';

export type RootStackParamList = {
  LoginScreen: undefined;
  ChatRoomScreen: undefined;
  ChatScreen: {room: string};
  UserListScreen: undefined;
  InvitationScreen: undefined;
  UserSearchListScreen: undefined;
  BottomTabScreen: undefined;
};

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={screens.Login}>
        <Stack.Screen name={screens.Login} component={LoginScreen} />
        <Stack.Screen name={screens.BottomTab} component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const BottomTab = createBottomTabNavigator();
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName={screens.UserList}>
      <BottomTab.Screen name={screens.ChatRoom} component={ChatRoomScreen} />
      <BottomTab.Screen name={screens.Chat} component={ChatScreen} />
      <BottomTab.Screen name={screens.UserList} component={UserListScreen} />
      <BottomTab.Screen
        name={screens.Invitation}
        component={InvitationScreen}
      />
      <BottomTab.Screen
        name={screens.UserSearchList}
        component={UserSearchListScreen}
      />
    </BottomTab.Navigator>
  );
}
