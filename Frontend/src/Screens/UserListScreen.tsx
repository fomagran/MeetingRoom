import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {View, Text, SectionList, Pressable} from 'react-native';
import UserComponent from '../Components/UserComponent';
import {RootStackParamList} from '../Navigation';
import Colors from '../Styles/Common/Colors';
import {USERS_IMAGE_URL} from '../Constants';
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
  const user = useSelector<RootState, User>(state => state.login.user);
  const userListState = useSelector<RootState, UserListState>(
    state => state.userList,
  );
  const actions = userListSlice.actions;
  const dispatch = useDispatch();
  const connectedUsers = useGetAllConnectedUserByIdQuery(user.id).data;
  const [sectionUsers, setSectionUsers] = useState([]);
  const users: any[] = [
    {
      department: 'HR',
      data: [
        {
          id: '1',
          name: 'Beenzino',
          profileImage: USERS_IMAGE_URL['Beenzino'],
          role: 'HR Director',
        },
        {
          id: '2',
          name: 'Mac Miller',
          profileImage: USERS_IMAGE_URL['MacMiller'],
          role: 'HR Manager',
        },
        {
          id: '3',
          name: 'Khalid',
          profileImage: USERS_IMAGE_URL['Khalid'],
          role: 'Recruiter',
        },
      ],
    },
    {
      department: 'Design',
      data: [
        {
          id: '4',
          name: 'Chance the rapper',
          profileImage: USERS_IMAGE_URL['ChanceTheRapper'],
          role: 'UI Designer',
        },
        {
          id: '5',
          name: 'Tom Hardy',
          profileImage: USERS_IMAGE_URL['TomHardy'],
          role: 'UX Designer',
        },
      ],
    },
    {
      department: 'Development',
      data: [
        {
          id: '6',
          name: 'Tatiana Manaois',
          profileImage: USERS_IMAGE_URL['TatianaManaois'],
          role: 'Frontend Engineer',
        },
        {
          id: '7',
          name: 'Dominic Fike',
          profileImage: USERS_IMAGE_URL['DominicFike'],
          role: 'Backend Engineer',
        },
      ],
    },
  ];

  const sectionStyle = {
    backgroundColor: Colors.transparent,
    color: Colors.gray2,
    marginLeft: 20,
    marginVertical: 20,
    fontSize: 16,
    fontWeight: 'bold',
  };

  useEffect(() => {
    if (connectedUsers !== undefined) {
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
        sectionList.push({department: key, data: map[key]});
      }

      console.log(sectionList);

      setSectionUsers(sectionList);
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
          <Text style={sectionStyle}>{section.department}</Text>
        )}
        keyExtractor={item => `${item.id}`}
        ListHeaderComponent={UserHeaderComponent}
      />
    </View>
  );
}
