import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {View, Text, SectionList, Pressable} from 'react-native';
import UserComponent from '../Components/UserComponent';
import {RootStackParamList} from '../Navigation';
import Colors from '../Styles/Common/Colors';
import UserHeaderComponent from '../Components/UserHeaderComponent';
import {RootState} from '../Redux/store';
import {useSelector} from 'react-redux';
import {ScreenEnums as screens} from '../Models/ScreenEnums';
import userListSlice from '../Redux/UserListSlice';
import {useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../Styles/Screen/UserListStyles';
import {useGetAllConnectedUserByIdQuery} from '../API/ConnectedUserAPISlice';

interface SectionDictionary {
  [key: string]: User[];
}

export default function UserListScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const currentUser = useSelector<RootState, User>(state => state.login.user);
  const userListState = useSelector<RootState, UserListState>(
    state => state.userList,
  );
  const actions = userListSlice.actions;
  const dispatch = useDispatch();
  const [sectionUsers, setSectionUsers] = useState([]);
  const connectedUsers = useGetAllConnectedUserByIdQuery(currentUser.id).data;

  useEffect(() => {
    if (connectedUsers !== undefined) {
      makeSectionList(connectedUsers);
    }
  }, [connectedUsers]);

  useEffect(() => {
    if (userListState.tapManagementButton) {
      navigation.navigate(screens.Invitation);
      dispatch(actions.tapManagement({isTapManagementButton: false}));
    }
  }, [userListState]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          onPress={() => {
            navigation.navigate(screens.UserSearchList);
          }}>
          <Icon style={styles.addUser} name="person-add"></Icon>
        </Pressable>
      ),
    });
  }, [navigation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Users',
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: Colors.white,
      },
      headerTintColor: Colors.black,
    });
  }, [navigation]);

  const makeSectionList = (connectedUsers: any[]) => {
    let map: SectionDictionary = {};
    for (let connectUser of connectedUsers) {
      if (map[connectUser.connected.department] === undefined) {
        map[connectUser.connected.department] = [connectUser.connected];
      } else {
        map[connectUser.connected.department].push(connectUser.connected);
      }
    }

    let sectionList = [];

    for (let key of Object.keys(map)) {
      if (key == currentUser.department) {
        sectionList.splice(0, 0, {department: key, data: map[key]});
      } else {
        sectionList.push({department: key, data: map[key]});
      }
    }

    setSectionUsers(sectionList);
  };

  return (
    <View>
      <SectionList
        style={styles.sectionList}
        sections={sectionUsers}
        renderItem={({item}) => (
          <UserComponent
            name={item.name}
            imageURI={item.profileImage}
            position={item.role}></UserComponent>
        )}
        renderSectionHeader={({section}) => (
          <Text style={styles.sectionTitle}>{section.department}</Text>
        )}
        keyExtractor={item => `${item.id}`}
        ListHeaderComponent={UserHeaderComponent}
      />
    </View>
  );
}
