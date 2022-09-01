import {View, TextInput, FlatList} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {styles} from '../Styles/Screen/UserSearchListStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../Styles/Common/Colors';
import SearchUserComponent from '../Components/SearchUserComponent';
import {RootStackParamList} from '../Navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {useGetAllUsersQuery} from '../API/UserAPISlice';
import {RootState} from '../Redux/store';
import {useSelector} from 'react-redux';

export default function UserSearchListScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const allUsers = useGetAllUsersQuery('').data;
  const userListState = useSelector<RootState, UserListState>(
    state => state.userList,
  );
  const [unconnectedUsers, setUnconnectedUsers] = useState<User[]>([]);
  const [searchUsers, setSearchUsers] = useState<any[]>([]);
  const user = useSelector<RootState, User>(state => state.login.user);
  const sentInvitationIds = useSelector<RootState, Invitation[]>(
    state => state.invitation.invitations,
  )
    .filter(inv => !inv.isReceived)
    .map(sentInv => sentInv.fromUserId);

  useEffect(() => {
    if (allUsers !== undefined) {
      const connectedUserIds = userListState.connectedUsers.map(cu => cu.id);
      const filterUser = allUsers.filter(
        u => u.id !== user.id && !connectedUserIds.includes(u.id),
      );
      setUnconnectedUsers(filterUser);
      setSearchUsers(filterUser);
    }
  }, [allUsers]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Search Users',
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: Colors.white,
      },
      headerTintColor: Colors.black,
    });
  }, [navigation]);

  const filterUsersBySearchText = (searchText: string) => {
    setSearchUsers(
      unconnectedUsers.filter(
        user => user.name.substring(0, searchText.length) == searchText,
      ),
    );
  };

  return (
    <View>
      <View style={styles.searchBarContainer}>
        <TextInput
          onChangeText={text => {
            filterUsersBySearchText(text);
          }}
          placeholder="  Search employees..."
          placeholderTextColor={Colors.gray1}
          style={styles.textInput}></TextInput>
        <Icon name="search" style={styles.searchBarIcon}></Icon>
      </View>
      <FlatList
        contentContainerStyle={{paddingBottom: 100}}
        data={searchUsers}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SearchUserComponent
            name={item.name}
            profileImage={item.profileImage}
            exist={sentInvitationIds.includes(item.id)}></SearchUserComponent>
        )}
      />
    </View>
  );
}
