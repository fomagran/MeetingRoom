import {StyleSheet} from 'react-native';
import Colors from '../Common/Colors';

export const styles = StyleSheet.create({
  tabView: {
    display: 'flex',
    flexDirection: 'row',
    height: '30%',
  },
  selectedButton: {
    marginHorizontal: 30,
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    borderBottomWidth: 3,
    borderColor: 'black',
  },
  deselectedButton: {
    marginHorizontal: 30,
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
  },
  selectedButtonText: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.charcoal,
    fontWeight: 'bold',
  },
  deselectedButtonText: {
    textAlign: 'center',
    fontSize: 16,
    color: Colors.gray3,
  },
});
