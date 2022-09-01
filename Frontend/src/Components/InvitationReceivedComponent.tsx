import React, {useEffect, useState} from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import {styles} from '../Styles/Component/InvitationReceivedStyles';

interface InvitationReceivedProps {
  name: string;
  profileImage: string;
  role: string;
}

export default function InvitationReceivedComponent({
  name,
  profileImage,
  role,
}: InvitationReceivedProps) {
  const [selectedWithdraw, setSelectedWithdraw] = useState<boolean>(false);

  const withdrawStyle = (isSelected: boolean) => {
    if (isSelected == true) {
      return styles.selelctedWithdraw;
    } else {
      return styles.deselectedWithdraw;
    }
  };

  const withdrawTextStyle = (isSelected: boolean) => {
    if (isSelected == true) {
      return styles.selectedWithdrawText;
    } else {
      return styles.deselectedWithdrawText;
    }
  };
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
        <Pressable
          onPress={() => {
            setSelectedWithdraw(!selectedWithdraw);
          }}
          style={withdrawStyle(selectedWithdraw)}>
          <Text style={withdrawTextStyle(selectedWithdraw)}> Accept </Text>
        </Pressable>
      </View>
    </View>
  );
}
