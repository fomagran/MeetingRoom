import React, {useEffect, useState} from 'react';
import {View, Modal, Text, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import chatRoomSlice from '../redux/ChatRoomSlice';
import {RootState} from '../redux/store';
import {styles} from '../Styles/Component/ChatRoomPasswordModalStyles';
import Icon from 'react-native-vector-icons/AntDesign';
import PasscodeKey from './PasscodeKey';
import Colors from '../Styles/Common/Colors';

export default function ChatRoomPasswordModal() {
  const chatRoomState = useSelector<RootState, ChatRoomState>(
    state => state.chatRoom,
  );
  const dispatch = useDispatch();
  const actions = chatRoomSlice.actions;
  const [passcodes, setPasscodes] = useState<string[]>([]);

  useEffect(() => {
    // setPasscodes([]);
    console.log(passcodes);
  }, [passcodes]);

  const passcodeStyle = (element: string | undefined) => {
    if (element == undefined) {
      return {};
    } else {
      return styles.passcodeDot;
    }
  };

  const handlePressKey = (number: string) => {
    if (passcodes.length < 4) {
      setPasscodes([...passcodes, number]);
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      presentationStyle={'overFullScreen'}
      visible={chatRoomState.isModalVisible}
      onRequestClose={() => {}}>
      <View style={styles.container}>
        <View style={styles.keypadContainer}>
          <Pressable
            style={styles.xContainer}
            onPress={() => dispatch(actions.passwordModalClose())}>
            <Icon style={styles.xButton} name="close"></Icon>
          </Pressable>
          <Text style={styles.passcodeTitle}>ENTER PASSCODE</Text>
          <Text style={styles.passcodeDetail}>
            Please enter chatroom passcode
          </Text>
          <View style={styles.horizontalView}>
            <View style={passcodeStyle(passcodes[0])}></View>
            <View style={passcodeStyle(passcodes[1])}></View>
            <View style={passcodeStyle(passcodes[2])}></View>
            <View style={passcodeStyle(passcodes[3])}></View>
          </View>
          <View style={styles.horizontalView}>
            <PasscodeKey
              onPress={() => {
                handlePressKey('1');
              }}
              text="1"></PasscodeKey>
            <PasscodeKey
              onPress={() => {
                handlePressKey('2');
              }}
              text="2"></PasscodeKey>
            <PasscodeKey
              onPress={() => {
                handlePressKey('3');
              }}
              text="3"></PasscodeKey>
          </View>
          <View style={styles.horizontalView}>
            <PasscodeKey
              onPress={() => {
                handlePressKey('4');
              }}
              text="4"></PasscodeKey>
            <PasscodeKey
              onPress={() => {
                handlePressKey('5');
              }}
              text="5"></PasscodeKey>
            <PasscodeKey
              onPress={() => {
                handlePressKey('6');
              }}
              text="6"></PasscodeKey>
          </View>
          <View style={styles.horizontalView}>
            <PasscodeKey
              onPress={() => {
                handlePressKey('7');
              }}
              text="7"></PasscodeKey>
            <PasscodeKey
              onPress={() => {
                handlePressKey('8');
              }}
              text="8"></PasscodeKey>
            <PasscodeKey
              onPress={() => {
                handlePressKey('9');
              }}
              text="9"></PasscodeKey>
          </View>
          <View style={styles.horizontalView}>
            <Pressable
              onPress={() => {
                setPasscodes(passcodes.slice(0, passcodes.length - 1));
              }}
              style={styles.buttonContainer}>
              <Icon name="back" style={styles.backButton}></Icon>
            </Pressable>
            <PasscodeKey
              onPress={() => {
                handlePressKey('0');
              }}
              text="0"></PasscodeKey>
            <Pressable onPress={() => {}} style={styles.buttonContainer}>
              <Icon name="check" style={styles.doneButton}></Icon>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
