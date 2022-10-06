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
import DropdownScreen from '../Screens/DropdownScreen';
import BottomSheetScreen from '../Screens/BottomSheetScreen';
import SwipableScreen from '../Screens/SwipableScreen';
import Icon from 'react-native-vector-icons/Ionicons';

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
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={screens.BottomTab}>
        <Stack.Screen name={screens.Login} component={LoginScreen} />
        <Stack.Screen name={screens.BottomTab} component={BottomTabNavigator} />
        <BottomTab.Screen name={screens.Chat} component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const BottomTab = createBottomTabNavigator();
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={{tabBarActiveTintColor: '#002C5F'}}
      initialRouteName={'SwipableScreen'}>
      <BottomTab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="caret-forward-outline" size={size} color={color} />
          ),
        }}
        name={'SwipableScreen'}
        component={SwipableScreen}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="caret-down-outline" size={size} color={color} />
          ),
        }}
        name={'DropdownScreen'}
        component={DropdownScreen}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="caret-up-outline" size={size} color={color} />
          ),
        }}
        name={'BottomSheeScreen'}
        component={BottomSheetScreen}
      />
    </BottomTab.Navigator>
  );
}
