import {StyleSheet} from 'react-native';
import Colors from '../Common/Colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.gray1,
    marginVertical: 5,
  },
  nameDetail: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.gray2,
  },
  profile: {
    marginTop: 20,
    borderRadius: 30,
    width: 60,
    height: 60,
    alignSelf: 'center',
  },
  buttonContainer: {
    width: '70%',
  },
  linearContainer: {
    borderRadius: 20,
    marginTop: 20,
    height: 50,
    justifyContent: 'center',
  },
  manageButton: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
