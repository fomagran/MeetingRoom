import {View, Pressable, Text, Dimensions} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import UserComponent from '../Components/UserComponent';
import {MOCK_USER_DATA} from '../Constants';
import Colors from '../Styles/Common/Colors';
import {styles} from '../Styles/Screen/DropdownStyles';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont()
import Spinner from 'react-native-loading-spinner-overlay';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../Navigation';

export default function DropdownScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [filteredData, setFilteredData] = useState(MOCK_USER_DATA);
  const categories = [
    {id: '1', category: 'All'},
    {id: '2', category: 'Engineer'},
    {id: '3', category: 'Manager'},
    {id: '4', category: 'Designer'},
    // {id: '5', category: 'All'},
    // {id: '6', category: 'Engineer'},
    // {id: '7', category: 'Manager'},
    // {id: '8', category: 'Designer'},
    // {id: '9', category: 'All'},
    // {id: '10', category: 'Engineer'},
    // {id: '11', category: 'Manager'},
    // {id: '12', category: 'Designer'},
  ];
  const [height, setHeight] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('Categories');
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
      <Pressable
        onPress={() => {
          setHeight(height == 0 ? windowHeight : 0);
        }}
        style={styles.categoryButton}>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryText}>{selectedCategory}</Text>
          <Icon style={styles.categoryText} name="caret-down-outline"></Icon>
        </View>
      </Pressable>
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
      <View
        style={{
          width: '100%',
          marginTop: 60,
          position: 'absolute',
          elevation: height,
          zIndex: height,
          height: height,
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <FlatList
          contentContainerStyle={{paddingBottom: 100}}
          data={categories}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Pressable
              onPress={() => {
                changeCategory(item);
              }}
              style={styles.dropdownComponent}>
              <Text style={styles.categoryText}>{item.category}</Text>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
}
