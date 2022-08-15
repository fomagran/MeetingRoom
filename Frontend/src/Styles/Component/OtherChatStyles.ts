import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  profile: {
    borderRadius: 20,
    alignItems: 'center',
    width: 40,
    height: 40,
  },
  name: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
  otherChat: {
    alignSelf: 'flex-start',
    padding: 10,
    color: 'white',
    backgroundColor: 'gray',
    fontSize: 16,
    borderRadius: 20,
    marginVertical: 10,
  },
});
