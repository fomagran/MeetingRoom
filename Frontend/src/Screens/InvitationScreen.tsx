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
import InvitationReceivedComponent from '../Components/InvitationReceivedComponent';

export default function InvitationScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [selectedTab, setSelectedTab] = useState('received');
  const receivedUsers: any[] = [
    {
      id: '1',
      name: 'Auggus',
      imageURI: USERS_IMAGE_URL['Khalid'],
      isAccepted: true,
    },
    {
      id: '2',
      name: 'Seption',
      imageURI: USERS_IMAGE_URL['MacMiller'],
      isAccepted: true,
    },
    {
      id: '3',
      name: 'Octob',
      imageURI: USERS_IMAGE_URL['Beenzino'],
      isAccepted: false,
    },
    {
      id: '4',
      name: 'Novel',
      imageURI: USERS_IMAGE_URL['MacMiller'],
      isAccepted: true,
    },
    {
      id: '5',
      name: 'Decem',
      imageURI: USERS_IMAGE_URL['Beenzino'],
      isAccepted: false,
    },
  ];

  const sentUsers: any[] = [
    {
      id: '1',
      name: 'Jane',
      imageURI: USERS_IMAGE_URL['Beenzino'],
      isWithdraw: true,
    },
    {
      id: '2',
      name: 'Febric',
      imageURI: USERS_IMAGE_URL['MacMiller'],
      isWithdraw: false,
    },
    {
      id: '3',
      name: 'Marcho',
      imageURI: USERS_IMAGE_URL['Khalid'],
      isWithdraw: false,
    },
    {
      id: '4',
      name: 'Apron',
      imageURI: USERS_IMAGE_URL['Khalid'],
      isWithdraw: false,
    },
    {
      id: '5',
      name: 'Mai',
      imageURI: USERS_IMAGE_URL['Beenzino'],
      isWithdraw: false,
    },
    {
      id: '6',
      name: 'Jun',
      imageURI: USERS_IMAGE_URL['MacMiller'],
      isWithdraw: true,
    },
    {
      id: '7',
      name: 'Julee',
      imageURI: USERS_IMAGE_URL['Khalid'],
      isWithdraw: false,
    },
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
      {selectedTab == 'received' ? (
        <FlatList
          contentContainerStyle={{paddingBottom: 100}}
          data={receivedUsers}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <InvitationReceivedComponent
              name={item.name}
              imageURI={item.imageURI}
              isAccepted={item.isAccepted}></InvitationReceivedComponent>
          )}
        />
      ) : (
        <FlatList
          contentContainerStyle={{paddingBottom: 100}}
          data={sentUsers}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <InvitationSentComponent
              name={item.name}
              imageURI={item.imageURI}
              isWithdraw={item.isWithdraw}></InvitationSentComponent>
          )}
        />
      )}
    </View>
  );
}
