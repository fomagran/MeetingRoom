import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  message: {
    fontSize: 14,
    color: '#7E7E7E',
    padding: 5,
  },
  time: {
    alignSelf: 'flex-end',
    fontSize: 13,
    color: '#D3D3D3',
  },
  profile: {
    borderRadius: 10,
    alignItems: 'center',
    padding: 30,
  },
  redDot: {
    marginLeft: -10,
    marginRight: -5,
    marginTop: -65,
    borderRadius: 10,
    padding: 5,
    backgroundColor: '#FF0000',
  },
  numberOfUsers: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 45,
  },
  users: {
    marginLeft: -30,
    marginRight: 5,
    fontSize: 15,
    marginBottom: 45,
  },
  private: {
    fontSize: 15,
  },
});
