import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { styles as ModalStyle } from '../styles/ModalStyle';

interface RemoveFriendModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function RemoveFriendModal({ visible, onClose, onConfirm }: RemoveFriendModalProps) {
  return (
    <Modal
      visible={visible}  
      onRequestClose={onClose}  
      transparent={true}
      animationType="fade"
    >
      <TouchableOpacity 
        style={ModalStyle.backdrop}
        activeOpacity={1} 
        onPress={onClose}
      >
        <View style={ModalStyle.modalContent}>
          <Text style={ModalStyle.title}>Are you sure?</Text>
          <View style={ModalStyle.buttonContainer}>
            <TouchableOpacity 
              style={[ModalStyle.button, ModalStyle.noButton]}
              onPress={onClose}
            >
              <Text style={ModalStyle.buttonText}>No</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[ModalStyle.button, ModalStyle.greenBtn]}
              onPress={onConfirm}
            >
              <Text style={ModalStyle.buttonText}>Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}