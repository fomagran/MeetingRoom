import {StyleSheet} from 'react-native';
import Colors from '../Common/Colors';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 10,
    marginBottom: 2,
  },
  horizontalView: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  nameBox: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.gray1,
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
  selelctedWithdraw: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: Colors.charcoal,
    justifyContent: 'flex-end',
  },
  deselectedWithdraw: {
    padding: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.gray1,
    justifyContent: 'flex-end',
  },
  selectedWithdrawText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.white,
  },
  deselectedWithdrawText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.gray1,
  },
});
