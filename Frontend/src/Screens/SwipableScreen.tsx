import {View, Pressable, Text, Dimensions} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import UserComponent from '../Components/UserComponent';
import {MOCK_USER_DATA} from '../Constants';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../Navigation';
import {SearchBar} from 'react-native-elements';

export default function SwipableScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const allData = MOCK_USER_DATA;
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

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loadingVisible, setLoadingVisible] = useState(false);

  const [searchText, setSearchText] = useState<string>('');
  const [searchSplitTexts, setSearchSplitTexts] = useState<string[]>([]);
  const [searchData, setSearchData] = useState<any>({});
  const [isSearching, setIsSearching] = useState<boolean>(false);

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
    }, 0);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const onSearchSubmit = (text: string) => {
    setIsSearching(true);
    const splitTexts = text.split(' ');
    let newSearchData: any[] = [];
    let textData: any[] = [];
    let splitData: any[] = [];

    for (let i = 0; i < allData.length; i++) {
      const current = allData[i].introduce.toUpperCase();
      if (current.indexOf(text.toUpperCase()) !== -1) {
        textData.push(allData[i]);
      } else {
        for (let j = 0; j < splitTexts.length; j++) {
          if (current.indexOf(splitTexts[j].toUpperCase()) !== -1) {
            splitData.push(allData[i]);
          }
        }
      }
    }

    newSearchData.push(...textData);
    newSearchData.push(...splitData);
    setSearchData(newSearchData);
    setSearchSplitTexts(splitTexts);
  };

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
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 15,
                paddingVertical: 10,
                backgroundColor:
                  item.category === selectedCategory ? '#002C5F' : 'gray',
                borderRadius: 15,
                marginVertical: 30,
                marginHorizontal: 10,
              }}
              onPress={() => changeCategory(item)}>
              <Text
                style={{
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
      <SearchBar
        containerStyle={{
          backgroundColor: 'transparent',
        }}
        platform={'ios'}
        onChangeText={(text: string) => setSearchText(text)}
        value={searchText}
        onSubmitEditing={({nativeEvent}) => onSearchSubmit(nativeEvent.text)}
        onCancel={() => {
          setIsSearching(false);
          setSearchText('');
          setSearchSplitTexts([]);
        }}></SearchBar>
      <FlatList
        contentContainerStyle={{paddingBottom: 200}}
        data={isSearching ? searchData : filteredData}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <UserComponent
            name={item.name}
            imageURI={item.profileImage}
            position={item.role}
            introduce={item.introduce}
            searchTexts={searchSplitTexts}></UserComponent>
        )}
      />
    </View>
  );
}
