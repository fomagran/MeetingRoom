import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useLayoutEffect} from 'react';
import {View, Text, SectionList} from 'react-native';
import UserComponent from '../Components/UserComponent';
import {RootStackParamList} from '../Navigation';
import Colors from '../Styles/Common/Colors';

export default function EmployeeListScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const users: any[] = [
    {
      department: 'HR',
      data: [
        {name: 'Tyler'},
        {id: '1', name: 'Volt'},
        {id: '2', name: 'Chris'},
        {id: '3', name: 'Ben'},
      ],
    },
    {
      department: 'Design',
      data: [
        {id: '4', name: 'June'},
        {id: '5', name: 'Kayla'},
      ],
    },
    {
      department: 'Development',
      data: [
        {id: '6', name: 'Xion'},
        {id: '7', name: 'Tom'},
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
          <UserComponent name={item.name}></UserComponent>
        )}
        renderSectionHeader={({section}) => (
          <Text style={sectionStyle}>{section.department}</Text>
        )}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  );
}
