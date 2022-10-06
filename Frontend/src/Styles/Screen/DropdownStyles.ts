import { StyleSheet } from 'react-native';
import Colors from '../Common/Colors';

export const styles = StyleSheet.create({
    categoryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    categoryButton: {
        backgroundColor: 'white',
        margin: 5,
        padding: 5,
        height: 50,
        marginHorizontal: 120,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
    },
    categoryText: {
        padding: 3,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.charcoal,
    },
    dropdownComponent: {
        marginHorizontal: 30,
        padding: 15,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1,
        elevation: 100,
    }
});
