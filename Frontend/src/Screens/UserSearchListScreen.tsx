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
import {useGetAllInvitationsQuery} from '../API/InvitationAPISlice';
import {useGetAllConnectedUserByIdQuery} from '../API/ConnectedUserAPISlice';

export default function UserSearchListScreen() {
  //MARK: - Properties

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const allUsers = useGetAllUsersQuery('').data;
  const [unconnectedUsers, setUnconnectedUsers] = useState<User[]>(allUsers);
  const [searchUsers, setSearchUsers] = useState<any[]>([]);
  const currentUser = useSelector<RootState, User>(state => state.login.user);
  const [sentInvitationIds, setSentInvitationIds] = useState<string[]>([]);
  const invitations = useGetAllInvitationsQuery(currentUser.id).data;
  const connectedUsers = useGetAllConnectedUserByIdQuery(currentUser.id).data;

  //MARK: - Life Cycle

  useEffect(() => {
    if (invitations !== undefined) {
      //전체 초대 목록 중 친구 요청을 보낸 유저의 id만 필터링 한다.
      const filterInvitation = invitations
        .filter(inv => !inv.isReceived)
        .map(sentInv => sentInv.fromUserId);
      setSentInvitationIds(filterInvitation);
    }
  }, [invitations]);

  useEffect(() => {
    if (allUsers !== undefined && connectedUsers !== undefined) {
      const connectedUserIds = connectedUsers.map(cu => cu.connectedUserId);
      //로그인 된 유저와 이미 친구로 연결된 유저를 필터링 한다.
      const filterUser = allUsers.filter(
        u => u.id !== currentUser.id && !connectedUserIds.includes(u.id),
      );
      setUnconnectedUsers(filterUser);
      setSearchUsers(filterUser);
    }
  }, [allUsers, connectedUsers]);

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

  //MARK: - Functions

  const filterUsersBySearchText = (searchText: string) => {
    setSearchUsers(
      unconnectedUsers.filter(
        user => user.name.substring(0, searchText.length) == searchText,
      ),
    );
  };

  //MARK: - View

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
            user={item}
            isSent={sentInvitationIds.includes(item.id)}></SearchUserComponent>
        )}
      />
    </View>
  );
}
