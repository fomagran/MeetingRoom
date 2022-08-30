import {StyleSheet} from 'react-native';
import Colors from '../Common/Colors';

export const styles = StyleSheet.create({
  horizontalView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.charcoal,
    marginVertical: 5,
  },
  nameDetail: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.gray2,
  },
  profileTextBox: {
    marginTop: 20,
    marginLeft: 15,
  },
  profile: {
    marginLeft: 10,
    marginTop: 20,
    borderRadius: 30,
    width: 70,
    height: 70,
    alignSelf: 'center',
  },
  buttonContainer: {
    alignSelf: 'center',
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
