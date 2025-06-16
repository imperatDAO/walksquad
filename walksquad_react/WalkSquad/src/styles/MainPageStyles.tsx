import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 80,
    alignItems: 'center',
  },
  headerContainer: {
    //width: '100%',
    //paddingHorizontal: 20,
    //alignItems: 'flex-start', 
    paddingBottom: 16,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  notificationIcon: {
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 20,
    paddingLeft: 15,
  },
  list: {
    width: '95%', 
    maxHeight: '50%', 
    borderRadius: 10, 
    borderWidth: 3,
    borderColor: '#eee',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  leaderItem: {
    backgroundColor: '#e6f3ff',
    padding: 10,
  },
  name: {
    fontSize: 18,
  },
  steps: {
    fontSize: 18,
    fontWeight: '500',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  bottomButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    position: 'absolute', 
    bottom: 80,
  },
  leaderboardButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    width: '60%',
  },
  smallButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    width: '45%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
});
