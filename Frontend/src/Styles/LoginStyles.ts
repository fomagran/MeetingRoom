import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingTop: 30,
    padding: 8,
  },
  textInput: {
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  loginButton: {
    width: '80%',
    margin: 10,
    padding: 8,
    backgroundColor: 'black',
    borderRadius: 10,
  },
  loginText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
