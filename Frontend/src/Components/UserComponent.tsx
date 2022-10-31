import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from '../Styles/Component/UserStyles';

interface UserComponentParams {
  name: string;
  imageURI: string;
  position: string;
  introduce: string;
}

export default function UserComponent({
  name,
  imageURI,
  position,
  introduce,
}: UserComponentParams) {
  const Highlighted = ({text = '', highlight = ''}) => {
    if (!highlight.trim()) {
      return <Text>{text}</Text>;
    }
    const regex = new RegExp(escapeRegex(highlight));
    const parts = text.split(regex);
    return (
      <Text>
        {parts
          .filter(part => part)
          .map((part, i) =>
            regex.test(part) ? (
              <Text style={{backgroundColor: '#fcf8e3'}} key={i}>
                {part}
              </Text>
            ) : (
              <Text key={i}>{part}</Text>
            ),
          )}
      </Text>
    );
  };

  function escapeRegex(string) {
    return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }

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
          <Highlighted text={introduce} highlight={'Lorem'} />
        </View>
      </View>
    </View>
  );
}
