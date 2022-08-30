import React, {useEffect, useState} from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import {styles} from '../Styles/Component/InvitationSentStyles';

interface InvitationReceivedProps {
  name: string;
  imageURI: string;
  isAccepted: boolean;
}

export default function InvitationReceivedComponent({
  name,
  imageURI,
  isAccepted,
}: InvitationReceivedProps) {
  const [selectedWithdraw, setSelectedWithdraw] = useState<boolean>(isAccepted);

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
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.nameDetail}>something is here...</Text>
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
