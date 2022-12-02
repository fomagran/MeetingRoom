import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from '../Styles/Component/UserStyles';
import HighlightText from '@sanar/react-native-highlight-text';

interface UserComponentParams {
  name: string;
  imageURI: string;
  position: string;
  introduce: string;
  searchTexts: string[];
}

export default function UserComponent({
  name,
  imageURI,
  position,
  introduce,
  searchTexts,
}: UserComponentParams) {
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
          <Text style={styles.nameDetail}>{position}</Text>
          <HighlightText
            style={styles.introduce}
            highlightStyle={{backgroundColor: 'yellow'}}
            searchWords={[searchTexts]}
            textToHighlight={introduce}
          />
        </View>
      </View>
    </View>
  );
}
