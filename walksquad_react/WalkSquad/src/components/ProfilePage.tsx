import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Friend, RootStackParamList } from '../../App';
import { styles as ProfileStyle } from '../styles/ProfilePageStyle';
import RemoveFriendModal from '../modals/RemoveFriendModal';
import { useEffect, useState } from 'react';

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;

interface ProfileInfo extends Friend {
    isFriend: boolean;
}

export default function ProfilePage({ route }: ProfileScreenProps) {
    const { friend } = route.params;
    const [isModalVisible, setModalVisible] = useState(false);
    const [profileInfo, setProfileInfo] = useState<ProfileInfo | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProfileInfo = async () => {
            try {
                // TODO: Replace with actual API call
                const mockFetchProfile = (): Promise<ProfileInfo> => {
                    return new Promise((resolve) => {
                        setTimeout(() => {
                            resolve({
                                ...friend,
                                isFriend: Math.random() < 0.5 // Mock random friend status
                            });
                        }, 1000);
                    });
                };

                const info = await mockFetchProfile();
                setProfileInfo(info);
            } catch (error) {
                console.error('Error fetching profile:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProfileInfo();
    }, [friend]);

    const handleAddFriend = async () => {
        // TODO: Implement add friend logic
        console.log("Add friend");
    };

    const handleRemoveFriend = () => {
        setModalVisible(true);
    }

    const handleConfirmRemove = () => {
        console.log("Remove friend confirmed");
        setModalVisible(false);
        // Add friend removal logic here
    };

    return (
        <View style={ProfileStyle.container}>
            <View style={ProfileStyle.profileSection}>
                <View style={ProfileStyle.profileHeader}>
                    <Image
                        style={ProfileStyle.avatar}
                        source={require('../../assets/avatar.png')}
                    />
                    <View style={ProfileStyle.userInfo}>
                        <Text style={ProfileStyle.nickname}>{friend.name}</Text>
                    </View>
                </View>

                <View style={ProfileStyle.detailsContainer}>
                    <View style={ProfileStyle.detailRow}>
                        <Text style={ProfileStyle.label}>First name:</Text>
                        <Text style={ProfileStyle.value}>First name</Text>
                    </View>
                    <View style={ProfileStyle.detailRow}>
                        <Text style={ProfileStyle.label}>Surname:</Text>
                        <Text style={ProfileStyle.value}>Surname</Text>
                    </View>
                </View>
            </View>

            <View style={ProfileStyle.buttonContainer}>
                {profileInfo && (
                    profileInfo.isFriend ? (
                        <TouchableOpacity
                            style={ProfileStyle.removeButton}
                            onPress={handleRemoveFriend}
                        >
                            <Text style={ProfileStyle.removeButtonText}>Remove friend</Text>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            style={[ProfileStyle.removeButton, ProfileStyle.addButton]}
                            onPress={handleAddFriend}
                        >
                            <Text style={ProfileStyle.removeButtonText}>Add friend</Text>
                        </TouchableOpacity>
                    )
                )}
            </View>

            <RemoveFriendModal
                visible={isModalVisible}
                onClose={() => setModalVisible(false)}
                onConfirm={handleConfirmRemove}
            />
        </View>
    );
}