import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        justifyContent: 'space-between', 
    },
    profileSection: {
        // Contains avatar and details
    },
    profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    userInfo: {
        flex: 1,
        justifyContent: 'center',
    },
    nickname: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    detailsContainer: {
        paddingHorizontal: 10,
    },
    detailRow: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        width: 100,
    },
    value: {
        fontSize: 16,
        flex: 1,
    },
    buttonContainer: {
        width: '100%',
        paddingVertical: 20,
    },
    removeButton: {
        backgroundColor: '#ff3b30',
        padding: 15,
        borderRadius: 10,
        width: '100%',
    },
    removeButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    addButton: {
        backgroundColor: '#34C759', 
    },
});