import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    inputContainer: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    input: {
        flex: 1,
        height: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingRight: 40, 
        fontSize: 16,
    },
    searchButton: {
        backgroundColor: '#007AFF',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonContainer: {
        marginTop: 'auto', 
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    resultContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#f8f8f8',
    },
    username: {
        fontSize: 18,
        fontWeight: '500',
    },
    viewProfileButton: {
        backgroundColor: '#999',
        padding: 10,
        borderRadius: 8,
    },
    errorText: {
        color: 'red',
        marginTop: 20,
        fontSize: 16,
        textAlign: 'center',
    },
    clearButton: {
        position: 'absolute',
        right: 10,
        top: '50%',
        transform: [{ translateY: -15 }], 
        padding: 3,  
        zIndex: 1,
    },
    clearButtonText: {
        color: '#999',
        fontSize: 20,  
        fontWeight: 'bold',
        lineHeight: 20,  
    },
    clearSearchButton: {
        backgroundColor: '#007AFF',
        marginBottom: 10,
    },
    topContent: {
        flex: 1,
    },
});