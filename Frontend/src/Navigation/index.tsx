import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import LoginScreen from '../Screens/LoginScreen';
import ChatScreen from '../Screens/ChatScreen';
import {ChatRoomScreen} from '../Screens/ChatRoomScreen';
import {ScreenEnums as screens} from '../Models/ScreenEnums';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={screens.Login}>
        <Stack.Screen name={screens.Login} component={LoginScreen} />
        <Stack.Screen name={screens.ChatRoom} component={ChatRoomScreen} />
        <Stack.Screen name={screens.Chat} component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
