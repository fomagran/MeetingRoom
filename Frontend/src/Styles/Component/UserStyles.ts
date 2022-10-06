import {StyleSheet} from 'react-native';
import Colors from '../Common/Colors';

export const styles = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 10,
    zIndex: 10,
  },
  horizontalView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.charcoal,
  },
  nameDetail: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.gray2,
  },
  profile: {
    marginLeft: -10,
    marginRight: 20,
    borderRadius: 30,
    alignItems: 'center',
    width: 60,
    height: 60,
  },
});
