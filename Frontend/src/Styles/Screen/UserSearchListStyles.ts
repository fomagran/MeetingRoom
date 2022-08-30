import {StyleSheet} from 'react-native';
import Colors from '../Common/Colors';

export const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    margin: 20,
    height: 50,
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderColor: Colors.gray1,
    borderRadius: 10,
  },
  searchBarIcon: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 25,
    padding: 5,
    marginLeft: -45,
    borderRadius: 5,
    color: Colors.white,
    backgroundColor: Colors.charcoal,
  },
  textInput: {
    marginLeft: 5,
    color: Colors.charcoal,
    fontSize: 16,
    width: '100%',
  },
});
