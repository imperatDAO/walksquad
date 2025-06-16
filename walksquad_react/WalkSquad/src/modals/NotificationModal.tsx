import React from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList } from 'react-native';
import { styles as ModalStyle } from '../styles/ModalStyle';

interface FriendRequest {
  id: string;
  username: string;
}

interface NotificationsModalProps {
  visible: boolean;
  onClose: () => void;
  friendRequests: FriendRequest[];
  onAccept: (requestId: string) => void;
  onDecline: (requestId: string) => void;
}

export default function NotificationsModal({
  visible,
  onClose,
  friendRequests,
  onAccept,
  onDecline
}: NotificationsModalProps) {

  const renderRequest = ({ item }: { item: FriendRequest }) => (
    <View style={ModalStyle.notificationRequestRow}>
      <Text style={ModalStyle.notificationUsername}>{item.username}</Text>
      <View style={ModalStyle.notificationButtonGroup}>
        <TouchableOpacity
          style={[ModalStyle.notificationButton, ModalStyle.notificationAcceptButton]}
          onPress={() => onAccept(item.id)}
        >
          <Text style={ModalStyle.notificationButtonText}>Accept</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[ModalStyle.notificationButton, ModalStyle.notificationDeclineButton]}
          onPress={() => onDecline(item.id)}
        >
          <Text style={[ModalStyle.notificationButtonText, ModalStyle.notificationDeclineText]}>
            Decline
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      transparent={true}
      animationType="fade"
    >
      <TouchableOpacity
        style={ModalStyle.notificationBackdrop}
        activeOpacity={1}
        onPress={onClose}
      >
        <View style={ModalStyle.notificationModalContent}
          onStartShouldSetResponder={() => true}
          onTouchEnd={e => e.stopPropagation()}
        >
          <Text style={ModalStyle.notificationTitle}>Friend Requests</Text>

          <View style={ModalStyle.notificationContentContainer}>
            {friendRequests.length > 0 ? (
              <FlatList
                data={friendRequests}
                renderItem={renderRequest}
                keyExtractor={(item) => item.id}
                style={ModalStyle.notificationRequestList}
                showsVerticalScrollIndicator={true}
                indicatorStyle="black"
                persistentScrollbar={true}
                scrollEnabled={true}
              />
            ) : (
              <Text style={ModalStyle.notificationEmptyText}>No friend requests.</Text>
            )}
          </View>

          <TouchableOpacity
            style={[ModalStyle.notificationButton, ModalStyle.notificationCloseButton]}
            onPress={onClose}
          >
            <Text style={ModalStyle.notificationButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
}