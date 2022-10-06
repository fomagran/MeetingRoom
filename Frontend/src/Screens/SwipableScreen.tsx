import {View, Pressable, Text, Dimensions} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import UserComponent from '../Components/UserComponent';
import {MOCK_USER_DATA} from '../Constants';
import Colors from '../Styles/Common/Colors';
import {styles} from '../Styles/Screen/DropdownStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import Spinner from 'react-native-loading-spinner-overlay';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../Navigation';

export default function SwipableScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [filteredData, setFilteredData] = useState(MOCK_USER_DATA);
  const categories = [
    {id: '1', category: 'All'},
    {id: '2', category: 'Engineer'},
    {id: '3', category: 'Manager'},
    {id: '4', category: 'Designer'},
    {id: '5', category: 'Community Outreach'},
    // {id: '6', category: 'Engineer'},
    // {id: '7', category: 'Manager'},
    // {id: '8', category: 'Designer'},
    // {id: '9', category: 'All'},
    // {id: '10', category: 'Engineer'},
    // {id: '11', category: 'Manager'},
    // {id: '12', category: 'Designer'},
  ];
  const [height, setHeight] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loadingVisible, setLoadingVisible] = useState(false);
  const windowHeight = Dimensions.get('window').height;

  const changeCategory = item => {
    setLoadingVisible(true);
    setTimeout(() => {
      setLoadingVisible(false);
      if (item.category === 'All') {
        setFilteredData(MOCK_USER_DATA);
      } else {
        setFilteredData(
          MOCK_USER_DATA.filter(data => data.type == item.category),
        );
      }
      setSelectedCategory(item.category);
      setHeight(0);
    }, 0);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View>
      {/* <Spinner visible={loadingVisible} textStyle={{color: Colors.white}} /> */}
      <View style={{flexDirection: 'row'}}>
        <Icon
          name="chevron-back-outline"
          style={{width: '10%', fontSize: 35, alignSelf: 'center'}}
        />
        <FlatList
          horizontal={true}
          data={categories}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Pressable
              style={{alignItems: 'center', justifyContent: 'center'}}
              onPress={() => changeCategory(item)}>
              <Text
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 10,
                  backgroundColor:
                    item.category === selectedCategory ? '#002C5F' : 'gray',
                  borderRadius: 15,
                  margin: 10,
                  textAlign: 'center',
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: 'white',
                }}>
                {item.category}
              </Text>
            </Pressable>
          )}
          style={{width: '80%', height: 100}}
        />
        <Icon
          name="chevron-forward-outline"
          style={{width: '10%', fontSize: 35, alignSelf: 'center'}}
        />
      </View>
      <FlatList
        contentContainerStyle={{paddingBottom: 100}}
        data={filteredData}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <UserComponent
            name={item.name}
            imageURI={item.profileImage}
            position={item.role}></UserComponent>
        )}
      />
    </View>
  );
}
