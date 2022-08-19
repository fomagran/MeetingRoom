import React, {useEffect} from 'react';
import {View, Modal, Text, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import chatRoomSlice from '../redux/ChatRoomSlice';
import {RootState} from '../redux/store';
import {styles} from '../Styles/Component/ChatRoomPasswordModalStyles';
import Icon from 'react-native-vector-icons/AntDesign';

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
            <Text style={styles.keypad}> 1 </Text>
            <Text style={styles.keypad}> 2 </Text>
            <Text style={styles.keypad}> 3 </Text>
          </View>
          <View style={styles.horizontalView}>
            <Text style={styles.keypad}> 4 </Text>
            <Text style={styles.keypad}> 5 </Text>
            <Text style={styles.keypad}> 6 </Text>
          </View>
          <View style={styles.horizontalView}>
            <Text style={styles.keypad}> 7 </Text>
            <Text style={styles.keypad}> 8 </Text>
            <Text style={styles.keypad}> 9 </Text>
          </View>
          <View style={styles.horizontalView}>
            <Icon name="back" style={styles.backButton}></Icon>
            <Text style={styles.keypad}> 0 </Text>
            <Icon name="check" style={styles.doneButton}></Icon>
          </View>
        </View>
      </View>
    </Modal>
  );
}
