import {StyleSheet} from 'react-native';
import Colors from '../Common/Colors';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: Colors.gray4,
  },
  horizontalView: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.gray1,
    flex: 1,
  },
  profile: {
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 30,
    alignItems: 'center',
    width: 30,
    height: 30,
  },
  addUser: {
    marginRight: 20,
    justifyContent: 'center',
    fontSize: 21,
    color: Colors.blue,
  },
});
