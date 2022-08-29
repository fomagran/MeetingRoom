import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../Navigation';
import {View, Text, Pressable} from 'react-native';
import {styles} from '../Styles/Screen/InvitationScreenStyles';
import {FlatList} from 'react-native-gesture-handler';
import {USERS_IMAGE_URL} from '../Constants';
import UserComponent from '../Components/UserComponent';
import InvitationSentComponent from '../Components/InvitationSentComponent';

export default function InvitationScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [selectedTab, setSelectedTab] = useState('received');
  const users: any[] = [
    {id: '1', name: 'Volt', imageURI: USERS_IMAGE_URL['Beenzino']},
    {id: '2', name: 'Chris', imageURI: USERS_IMAGE_URL['MacMiller']},
    {id: '3', name: 'Ben', imageURI: USERS_IMAGE_URL['Khalid']},
    {id: '4', name: 'June', imageURI: USERS_IMAGE_URL['Khalid']},
    {id: '5', name: 'Kayla', imageURI: USERS_IMAGE_URL['Beenzino']},
    {id: '6', name: 'Xion', imageURI: USERS_IMAGE_URL['MacMiller']},
    {id: '7', name: 'Tom', imageURI: USERS_IMAGE_URL['Khalid']},
  ];

  const tabButtonStyle = (current: string) => {
    if (current == selectedTab) {
      return styles.selectedButton;
    } else {
      return styles.deselectedButton;
    }
  };

  const tabButtonTextStyle = (current: string) => {
    if (current == selectedTab) {
      return styles.selectedButtonText;
    } else {
      return styles.deselectedButtonText;
    }
  };

  return (
    <View>
      <View style={styles.tabView}>
        <Pressable
          onPress={() => {
            setSelectedTab('received');
          }}
          style={tabButtonStyle('received')}>
          <Text style={tabButtonTextStyle('received')}>Received</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            setSelectedTab('sent');
          }}
          style={tabButtonStyle('sent')}>
          <Text style={tabButtonTextStyle('sent')}>Sent</Text>
        </Pressable>
      </View>
      <FlatList
        contentContainerStyle={{paddingBottom: 100}}
        data={users}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <InvitationSentComponent
            name={item.name}
            imageURI={item.imageURI}></InvitationSentComponent>
        )}
      />
    </View>
  );
}
