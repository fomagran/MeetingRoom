import React from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import {useDeleteInvitationMutation} from '../API/InvitationAPISlice';
import {useAddUserMutation} from '../API/ConnectedUserAPISlice';
import {styles} from '../Styles/Component/InvitationReceivedStyles';
import {useSelector} from 'react-redux';
import {RootState} from '../Redux/store';

interface InvitationReceivedProps {
  user: User;
}

export default function InvitationReceivedComponent({
  user,
}: InvitationReceivedProps) {
  const [deleteInvitation] = useDeleteInvitationMutation();
  const [addUser] = useAddUserMutation();
  const currentUser = useSelector<RootState, User>(state => state.login.user);

  return (
    <View style={styles.card}>
      <View style={styles.horizontalView}>
        <Image
          style={styles.profile}
          source={{
            uri: user.profileImage,
          }}
        />
        <View style={styles.nameBox}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.nameDetail}>{user.role}</Text>
        </View>
        <Pressable
          onPress={() => {
            deleteInvitation({userId: currentUser.id, fromUserId: user.id});
            deleteInvitation({userId: user.id, fromUserId: currentUser.id});
            addUser({
              id: '',
              userId: currentUser.id,
              connectedUserId: user.id,
              connected: undefined,
            });
          }}
          style={styles.acceptButton}>
          <Text style={styles.acceptButtonText}> Accept </Text>
        </Pressable>
      </View>
    </View>
  );
}
