import React, {useEffect} from 'react';
import {View, Modal, Text, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import chatRoomSlice from '../redux/ChatRoomSlice';
import {RootState} from '../redux/store';
import {styles} from '../Styles/Component/ChatRoomPasswordModalStyles';
import {styles as PasscodStyles} from '../Styles/Component/PasswordKeyStyles';
import Icon from 'react-native-vector-icons/AntDesign';
import PasscodeKey from './PasscodeKey';

export default function ChatRoomPasswordModal() {
  const chatRoomState = useSelector<RootState, ChatRoomState>(
    state => state.chatRoom,
  );
  const dispatch = useDispatch();
  const actions = chatRoomSlice.actions;

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
            <View style={styles.passcodeDot}></View>
            <View style={styles.passcodeDot}></View>
            <View style={styles.passcodeDot}></View>
            <View style={styles.passcodeDot}></View>
          </View>
          <View style={styles.horizontalView}>
            <PasscodeKey
              onPress={() => {
                console.log('Press');
              }}
              text="1"></PasscodeKey>
            <PasscodeKey
              onPress={() => {
                console.log('Press');
              }}
              text="2"></PasscodeKey>
            <PasscodeKey
              onPress={() => {
                console.log('Press');
              }}
              text="3"></PasscodeKey>
          </View>
          <View style={styles.horizontalView}>
            <PasscodeKey
              onPress={() => {
                console.log('Press');
              }}
              text="4"></PasscodeKey>
            <PasscodeKey
              onPress={() => {
                console.log('Press');
              }}
              text="5"></PasscodeKey>
            <PasscodeKey
              onPress={() => {
                console.log('Press');
              }}
              text="6"></PasscodeKey>
          </View>
          <View style={styles.horizontalView}>
            <PasscodeKey
              onPress={() => {
                console.log('Press');
              }}
              text="7"></PasscodeKey>
            <PasscodeKey
              onPress={() => {
                console.log('Press');
              }}
              text="8"></PasscodeKey>
            <PasscodeKey
              onPress={() => {
                console.log('Press');
              }}
              text="9"></PasscodeKey>
          </View>
          <View style={styles.horizontalView}>
            <Pressable
              onPress={() => {
                console.log('Press');
              }}
              style={styles.buttonContainer}>
              <Icon name="back" style={styles.backButton}></Icon>
            </Pressable>
            <PasscodeKey
              onPress={() => {
                console.log('Press');
              }}
              text="0"></PasscodeKey>
            <Pressable
              onPress={() => {
                console.log('Press');
              }}
              style={styles.buttonContainer}>
              <Icon name="check" style={styles.doneButton}></Icon>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
