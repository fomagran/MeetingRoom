import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {styles} from '../Styles/Component/UserHeaderStyles';
import {USERS_IMAGE_URL} from '../Constants';
import LinearGradient from 'react-native-linear-gradient';
import userListSlice from '../Redux/UserListSlice';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../Redux/store';

export default function UserHeaderComponent() {
  const actions = userListSlice.actions;
  const dispatch = useDispatch();
  const user = useSelector<RootState, User>(state => state.login.user);

  return (
    <View style={styles.container}>
      <View style={styles.horizontalView}>
        <Image
          style={styles.profile}
          source={{
            uri: USERS_IMAGE_URL['Fomagran'],
          }}
        />
        <View style={styles.profileTextBox}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.nameDetail}>{user.role}</Text>
        </View>
      </View>
      <Pressable
        style={styles.buttonContainer}
        onPress={() => {
          dispatch(actions.tapManagement({isTapManagementButton: true}));
        }}>
        <LinearGradient
          colors={['#CE9FFC', '#7367F0']}
          style={styles.linearContainer}>
          <Text style={styles.manageButton}>Invitation management</Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
}
