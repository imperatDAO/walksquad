import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  noButton: {
    backgroundColor: '#ff3b30',
  },
  blueBtn: {
    backgroundColor: '#007AFF',
  },
  greenBtn: {
    backgroundColor: '#34C759',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  // notification styles
  // notificationButton: {
  //   padding: 10,
  //   borderRadius: 8,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // notificationButtonText: {
  //   color: '#FFFFFF',  // White text color
  //   fontSize: 16,
  //   fontWeight: '500',
  // },
  notificationBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationModalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    maxWidth: 400,
  },
  notificationTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  notificationRequestList: {
    height: 160,        
    width: '100%',
  },
  notificationRequestRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  notificationUsername: {
    fontSize: 16,
    flex: 1,
    marginRight: 10,
  },
  notificationButtonGroup: {
    flexDirection: 'row',
    gap: 8,
  },
  notificationButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    minWidth: 70,
  },
  notificationAcceptButton: {
    backgroundColor: '#007AFF',
  },
  notificationDeclineButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#FF3B30',
  },
  notificationCloseButton: {
    backgroundColor: '#007AFF',
    alignItems: 'center',        
    justifyContent: 'center',    
    paddingVertical: 10,         
    width: '100%',               
    marginTop: 8,
  },
  notificationButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  notificationDeclineText: {
    color: '#FF3B30',
  },
  notificationEmptyText: {
    textAlign: 'center',
    color: '#999',
    fontSize: 16,
    marginVertical: 20,
  },
  notificationContentContainer: {
    height: 160,
    marginBottom: 20,
    width: '100%',
    backgroundColor: 'white',
  },
});