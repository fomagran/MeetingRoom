import {View, TextInput, FlatList} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../Styles/Screen/UserSearchListStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../Styles/Common/Colors';
import {USERS_IMAGE_URL} from '../Constants';
import SearchUserComponent from '../Components/SearchUserComponent';

export default function UserSearchListScreen() {
  const [searchText, setSearchText] = useState<string>('');
  const [searchUsers, setSearchUsers] = useState<any[]>([]);
  const allUsers: any[] = [
    {
      id: '1',
      name: 'Khalid',
      imageURI: USERS_IMAGE_URL['Khalid'],
      exist: true,
    },
    {
      id: '2',
      name: 'MacMiller',
      imageURI: USERS_IMAGE_URL['MacMiller'],
      exist: true,
    },
    {
      id: '3',
      name: 'Beenzino',
      imageURI: USERS_IMAGE_URL['Beenzino'],
      exist: false,
    },
    {
      id: '4',
      name: 'Tom Hardy',
      imageURI: USERS_IMAGE_URL['TomHardy'],
      exist: true,
    },
    {
      id: '5',
      name: 'Tatiana Manaois',
      imageURI: USERS_IMAGE_URL['TatianaManaois'],
      exist: false,
    },
    {
      id: '6',
      name: 'Future',
      imageURI: USERS_IMAGE_URL['Future'],
      exist: true,
    },
    {
      id: '7',
      name: 'Dominic Fike',
      imageURI: USERS_IMAGE_URL['DominicFike'],
      exist: false,
    },
    {
      id: '8',
      name: 'Kanye West',
      imageURI: USERS_IMAGE_URL['KanyeWest'],
      exist: false,
    },
    {
      id: '9',
      name: 'Eminem',
      imageURI: USERS_IMAGE_URL['Eminem'],
      exist: false,
    },
    {
      id: '10',
      name: 'Drake',
      imageURI: USERS_IMAGE_URL['Drake'],
      exist: false,
    },
    {
      id: '11',
      name: 'Jay-Z',
      imageURI: USERS_IMAGE_URL['JayZ'],
      exist: true,
    },
    {
      id: '12',
      name: 'Chance the rapper',
      imageURI: USERS_IMAGE_URL['ChanceTheRapper'],
      exist: false,
    },
  ];

  const filterUsersBySearchText = (searchText: string) => {
    // if (searchText == '') {
    //   setSearchUsers([]);
    //   return;
    // }

    setSearchUsers(
      allUsers.filter(
        user => user.name.substr(0, searchText.length) == searchText,
      ),
    );
  };

  return (
    <View>
      <View style={styles.searchBarContainer}>
        <TextInput
          onChangeText={text => {
            setSearchText(text);
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
            imageURI={item.imageURI}
            exist={item.exist}></SearchUserComponent>
        )}
      />
    </View>
  );
}
