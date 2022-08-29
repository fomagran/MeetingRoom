import React, {useEffect, useState} from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import {styles} from '../Styles/Component/InvitationSentStyles';

interface InvitationSentProps {
  name: string;
  imageURI: string;
}

export default function InvitationSentComponent({
  name,
  imageURI,
}: InvitationSentProps) {
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
            uri: imageURI,
          }}
        />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.nameDetail}>something is here...</Text>
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
