import React from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import {styles} from '../Styles/Component/PasswordKeyStyles';

interface PasscodeKeyProps {
  text: string;
  onPress: () => void;
}

export default function PasscodeKey({text, onPress}: PasscodeKeyProps) {
  return (
    <View>
      <Pressable onPress={onPress} style={styles.keypad}>
        <Text style={styles.keyText}>{text}</Text>
      </Pressable>
    </View>
  );
}
