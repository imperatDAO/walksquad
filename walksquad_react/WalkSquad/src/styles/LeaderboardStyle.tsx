import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    pickerContainer: {
        width: 120,
        height: 50,
        overflow: 'hidden',  
    },
    picker: {
        width: '100%',
        height: '100%',
        color: '#007AFF',
    },
    table: {
        overflow: 'hidden',
    },
    headerRow: {
        flexDirection: 'row',
        backgroundColor: '#f0f0f0',
        padding: 12,
    },
    headerCell: {
        width: 100,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#eee',
        padding: 12,
    },
    cell: {
        width: 100,
        textAlign: 'center',
    },
    mvpContainer: {
        marginTop: 20,
        padding: 16,
        backgroundColor: '#007AFF',
        borderRadius: 8,
        alignItems: 'center',
    },
    mvpTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
        color: 'white',
    },
    mvpText: {
        fontSize: 20,
        color: 'white',
    },
});