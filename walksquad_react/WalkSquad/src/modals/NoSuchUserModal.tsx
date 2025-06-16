import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { styles as ModalStyle } from '../styles/ModalStyle';

interface NoSuchUserModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function NoSuchUserModal({ visible, onClose }: NoSuchUserModalProps) {
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
          <Text style={ModalStyle.title}>No such user</Text>
          <View style={ModalStyle.buttonContainer}>
            <TouchableOpacity 
              style={[ModalStyle.button, ModalStyle.blueBtn]}
              onPress={onClose}
            >
              <Text style={ModalStyle.buttonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}