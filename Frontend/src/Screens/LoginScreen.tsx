import {Pressable, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../Styles/LoginStyles';

export default function LoginScreen({navigation}) {
  const [inputText, setInputText] = useState('');
  return (
    <View>
      <TextInput
        style={styles.textInput}
        onChangeText={text => setInputText(text)}></TextInput>
      <Pressable
        onPress={() => {
          navigation.navigate('ChatScreen', {user: inputText});
        }}>
        <Text>입장</Text>
      </Pressable>
    </View>
  );
}
