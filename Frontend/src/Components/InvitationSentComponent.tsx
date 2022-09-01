import React from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import {styles} from '../Styles/Component/InvitationSentStyles';

interface InvitationSentProps {
  name: string;
  profileImage: string;
  role: string;
}

export default function InvitationSentComponent({
  name,
  profileImage,
  role,
}: InvitationSentProps) {
  return (
    <View style={styles.card}>
      <View style={styles.horizontalView}>
        <Image
          style={styles.profile}
          source={{
            uri: profileImage,
          }}
        />
        <View style={styles.nameBox}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.nameDetail}>{role}</Text>
        </View>
        <Pressable onPress={() => {}} style={styles.withdrawButton}>
          <Text style={styles.withdrawButtonText}> Withdraw </Text>
        </Pressable>
      </View>
    </View>
  );
}
