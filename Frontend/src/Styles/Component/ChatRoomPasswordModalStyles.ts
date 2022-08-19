import {StyleSheet} from 'react-native';
import Colors from '../Common/Colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
    flex: 1,
  },
  keypadContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    height: '75%',
    width: '80%',
  },
  horizontalView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  xButton: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  xContainer: {
    marginTop: -10,
    marginRight: 15,

    alignSelf: 'flex-end',
  },
  passcodeTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: 'black',
  },
  passcodeDetail: {
    margin: 10,
    fontSize: 15,
    color: 'gray',
  },
  passcodeDot: {
    backgroundColor: Colors.orange,
    padding: 5,
    borderRadius: 10,
    marginHorizontal: 15,
    marginVertical: 15,
  },

  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  backButton: {
    fontSize: 17,
    fontWeight: 'bold',
    margin: 10,
    padding: 25,
    borderRadius: 60,
    color: 'white',
    backgroundColor: Colors.ligthRed,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
  },
  doneButton: {
    fontSize: 17,
    fontWeight: 'bold',
    margin: 10,
    padding: 25,
    borderRadius: 60,
    color: 'white',
    backgroundColor: Colors.green,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
  },
});
