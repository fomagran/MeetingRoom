import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useLayoutEffect} from 'react';
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

export default function UserListScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const userListState = useSelector<RootState, UserListState>(
    state => state.userList,
  );
  const actions = userListSlice.actions;
  const dispatch = useDispatch();
  const users: any[] = [
    {
      department: 'HR',
      data: [
        {id: '1', name: 'Beenzino', imageURI: USERS_IMAGE_URL['Beenzino']},
        {id: '2', name: 'Mac Miller', imageURI: USERS_IMAGE_URL['MacMiller']},
        {id: '3', name: 'Khalid', imageURI: USERS_IMAGE_URL['Khalid']},
      ],
    },
    {
      department: 'Design',
      data: [
        {
          id: '4',
          name: 'Chance the rapper',
          imageURI: USERS_IMAGE_URL['ChanceTheRapper'],
        },
        {id: '5', name: 'Tom Hardy', imageURI: USERS_IMAGE_URL['TomHardy']},
      ],
    },
    {
      department: 'Development',
      data: [
        {
          id: '6',
          name: 'Tatiana Manaois',
          imageURI: USERS_IMAGE_URL['TatianaManaois'],
        },
        {
          id: '7',
          name: 'Dominic Fike',
          imageURI: USERS_IMAGE_URL['DominicFike'],
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
        sections={users}
        renderItem={({item}) => (
          <UserComponent
            name={item.name}
            imageURI={item.imageURI}></UserComponent>
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
