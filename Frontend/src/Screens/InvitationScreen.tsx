import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../Navigation';
import {View, Text, Pressable} from 'react-native';
import {styles} from '../Styles/Screen/InvitationScreenStyles';
import {FlatList} from 'react-native-gesture-handler';
import InvitationSentComponent from '../Components/InvitationSentComponent';
import InvitationReceivedComponent from '../Components/InvitationReceivedComponent';
import Colors from '../Styles/Common/Colors';
import {useSelector} from 'react-redux';
import {RootState} from '../Redux/store';

export default function InvitationScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [selectedTab, setSelectedTab] = useState('received');
  const invitations = useSelector<RootState, Invitation[]>(
    state => state.invitation.invitations,
  );
  const [sentUsers, setSentUsers] = useState<User[]>([]);
  const [receivedUsers, setReceivedUsers] = useState<User[]>([]);

  useEffect(() => {
    if (invitations !== undefined) {
      const sent = invitations
        .filter(inv => !inv.isReceived)
        .map(inv => inv.fromUser);
      const received = invitations
        .filter(inv => inv.isReceived)
        .map(inv => inv.fromUser);
      setSentUsers(sent);
      setReceivedUsers(received);
    }
  }, [invitations]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Invitation Management',
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: Colors.white,
      },
      headerTintColor: Colors.black,
    });
  }, [navigation]);

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
              profileImage={item.profileImage}
              role={item.role}></InvitationReceivedComponent>
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
              profileImage={item.profileImage}
              role={item.role}></InvitationSentComponent>
          )}
        />
      )}
    </View>
  );
}
