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
      name: 'Khalid',
      imageURI: USERS_IMAGE_URL['Khalid'],
      isAccepted: true,
      position: 'HR Director',
    },
    {
      id: '2',
      name: 'MacMiller',
      imageURI: USERS_IMAGE_URL['MacMiller'],
      isAccepted: true,
      position: 'HR Manager',
    },
    {
      id: '3',
      name: 'Beenzino',
      imageURI: USERS_IMAGE_URL['Beenzino'],
      isAccepted: false,
      position: 'Recruiter',
    },
    {
      id: '4',
      name: 'Tom Hardy',
      imageURI: USERS_IMAGE_URL['TomHardy'],
      isAccepted: true,
      position: 'UX Designer',
    },
    {
      id: '5',
      name: 'Tatiana Manaois',
      imageURI: USERS_IMAGE_URL['TatianaManaois'],
      isAccepted: false,
      position: 'UI Desinger',
    },
  ];

  const sentUsers: any[] = [
    {
      id: '1',
      name: 'Future',
      imageURI: USERS_IMAGE_URL['Future'],
      isWithdraw: true,
      position: 'Frontend Engineer',
    },
    {
      id: '2',
      name: 'Dominic Fike',
      imageURI: USERS_IMAGE_URL['DominicFike'],
      isWithdraw: false,
      position: 'Backend Engineer',
    },
    {
      id: '3',
      name: 'Kanye West',
      imageURI: USERS_IMAGE_URL['KanyeWest'],
      isWithdraw: false,
      position: 'Software Engineer',
    },
    {
      id: '4',
      name: 'Eminem',
      imageURI: USERS_IMAGE_URL['Eminem'],
      isWithdraw: false,
      position: 'HR Coordinator',
    },
    {
      id: '5',
      name: 'Drake',
      imageURI: USERS_IMAGE_URL['Drake'],
      isWithdraw: false,
      position: 'Illustrator',
    },
    {
      id: '6',
      name: 'Jay-Z',
      imageURI: USERS_IMAGE_URL['JayZ'],
      isWithdraw: true,
      position: 'CEO',
    },
    {
      id: '7',
      name: 'Chance the rapper',
      imageURI: USERS_IMAGE_URL['ChanceTheRapper'],
      isWithdraw: false,
      position: 'Anayist',
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
              isAccepted={item.isAccepted}
              position={item.position}></InvitationReceivedComponent>
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
              isWithdraw={item.isWithdraw}
              position={item.position}></InvitationSentComponent>
          )}
        />
      )}
    </View>
  );
}
