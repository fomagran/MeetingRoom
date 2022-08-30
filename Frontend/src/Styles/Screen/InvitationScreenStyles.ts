import {StyleSheet} from 'react-native';
import Colors from '../Common/Colors';

export const styles = StyleSheet.create({
  tabView: {
    flexDirection: 'row',
    height: 70,
    marginBottom: 10,
  },
  selectedButton: {
    marginHorizontal: 30,
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    borderBottomWidth: 3,
    borderColor: Colors.charcoal,
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
