import {StyleSheet} from 'react-native';

export const ChatScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    padding: 8,
  },
  welcomeChat: {
    alignSelf: 'center',
    padding: 10,
    color: 'white',
    backgroundColor: '#212124',
    fontSize: 16,
    borderRadius: 20,
    marginVertical: 10,
  },
  myChat: {
    alignSelf: 'flex-end',
    padding: 10,
    color: 'white',
    backgroundColor: 'yellow',
    fontSize: 16,
    borderRadius: 20,
    marginVertical: 10,
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
  input: {
    width: '70%',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginRight: 30,
  },
  send: {
    backgroundColor: 'black',
    color: 'white',
    padding: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  bottomContainer: {
    marginHorizontal: 10,
    flexDirection: 'row',
    marginBottom: 80,
  },
  list: {
    height: '80%',
  },
});
