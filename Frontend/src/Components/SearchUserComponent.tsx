import React, {useState} from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import {styles} from '../Styles/Component/SearchUserStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../Styles/Common/Colors';
import {
  useAddInvitationMutation,
  useGetAllInvitationsQuery,
} from '../API/InvitationAPISlice';
import {useSelector} from 'react-redux';
import {RootState} from '../Redux/store';

interface SearchUserProps {
  user: User;
  isSent: boolean;
}

export default function SearchUserComponent({user, isSent}: SearchUserProps) {
  const [sent, setSentUser] = useState<boolean>(isSent);
  const [addInvitation] = useAddInvitationMutation();
  const currentUser = useSelector<RootState, User>(state => state.login.user);

  const existColor = (exist: boolean) => {
    return exist ? Colors.charcoal : Colors.blue;
  };

  return (
    <View style={styles.card}>
      <View style={styles.horizontalView}>
        <Image
          style={styles.profile}
          source={{
            uri: user.profileImage,
          }}
        />
        <Text style={styles.name}>{user.name}</Text>
        <Pressable
          onPress={() => {
            if (!sent) {
              setSentUser(!sent);
              addInvitation({
                id: '',
                userId: currentUser.id,
                fromUserId: user.id,
                isReceived: false,
                fromUser: undefined,
              });
              addInvitation({
                id: '',
                userId: user.id,
                fromUserId: currentUser.id,
                fromUser: undefined,
                isReceived: true,
              });
            }
          }}>
          <Icon
            style={{...styles.addUser, ...{color: existColor(sent)}}}
            name={sent ? 'ios-time' : 'person-add'}></Icon>
        </Pressable>
      </View>
    </View>
  );
}
function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}
