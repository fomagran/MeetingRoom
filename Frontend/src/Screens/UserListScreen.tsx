import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useLayoutEffect} from 'react';
import {View, Text, SectionList} from 'react-native';
import UserComponent from '../Components/UserComponent';
import {RootStackParamList} from '../Navigation';
import Colors from '../Styles/Common/Colors';
import {USERS_IMAGE_URL} from '../Constants';
import UserHeaderComponent from '../Components/UserHeaderComponent';

export default function UserListScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const users: any[] = [
    {
      department: 'HR',
      data: [
        {id: '1', name: 'Volt', imageURI: USERS_IMAGE_URL['Beenzino']},
        {id: '2', name: 'Chris', imageURI: USERS_IMAGE_URL['MacMiller']},
        {id: '3', name: 'Ben', imageURI: USERS_IMAGE_URL['Khalid']},
      ],
    },
    {
      department: 'Design',
      data: [
        {id: '4', name: 'June', imageURI: USERS_IMAGE_URL['Khalid']},
        {id: '5', name: 'Kayla', imageURI: USERS_IMAGE_URL['Beenzino']},
      ],
    },
    {
      department: 'Development',
      data: [
        {id: '6', name: 'Xion', imageURI: USERS_IMAGE_URL['MacMiller']},
        {id: '7', name: 'Tom', imageURI: USERS_IMAGE_URL['Khalid']},
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

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Users',
      headerTitleAlign: 'center',
    });
  }, [navigation]);

  return (
    <View style={{backgroundColor: '#FBFBFD'}}>
      <SectionList
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
