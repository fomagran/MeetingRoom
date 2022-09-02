import React from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {useDeleteInvitationMutation} from '../API/InvitationAPISlice';
import {RootState} from '../Redux/store';
import {styles} from '../Styles/Component/InvitationSentStyles';

interface InvitationSentProps {
  user: User;
}

export default function InvitationSentComponent({user}: InvitationSentProps) {
  const [deleteInvitation] = useDeleteInvitationMutation();
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
          }}
          style={styles.withdrawButton}>
          <Text style={styles.withdrawButtonText}> Withdraw </Text>
        </Pressable>
      </View>
    </View>
  );
}
