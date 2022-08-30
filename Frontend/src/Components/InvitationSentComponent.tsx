import React, {useEffect, useState} from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import {styles} from '../Styles/Component/InvitationSentStyles';

interface InvitationSentProps {
  name: string;
  imageURI: string;
  isWithdraw: boolean;
  position: string;
}

export default function InvitationSentComponent({
  name,
  imageURI,
  isWithdraw,
  position,
}: InvitationSentProps) {
  const [selectedWithdraw, setSelectedWithdraw] = useState<boolean>(isWithdraw);

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
            uri: imageURI,
          }}
        />
        <View style={styles.nameBox}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.nameDetail}>{position}</Text>
        </View>
        <Pressable
          onPress={() => {
            console.log('??');
            setSelectedWithdraw(!selectedWithdraw);
          }}
          style={withdrawStyle(selectedWithdraw)}>
          <Text style={withdrawTextStyle(selectedWithdraw)}> Withdraw </Text>
        </Pressable>
      </View>
    </View>
  );
}
