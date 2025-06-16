import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Friend, RootStackParamList } from '../../App';
import { styles as SearchStyle } from '../styles/SearchStyle';
import NoSuchUserModal from '../modals/NoSuchUserModal';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Search'>;

export default function SearchScreen() {
    const [username, setUsername] = useState('');
    const [searchResult, setSearchResult] = useState<Friend | null>(null);
    const [showModal, setShowModal] = useState(false);
    const navigation = useNavigation<NavigationProp>();

    const handleSearch = async () => {
        try {
            // TODO: Replace with actual API call
            const mockSearch = (username: string): Promise<Friend | null> => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        // Simulate some usernames that exist
                        const existingUsers = ['alice', 'bob', 'charlie'];
                        if (existingUsers.includes(username.toLowerCase())) {
                            resolve({ id: '999', name: username, steps: 5000 });
                        } else {
                            resolve(null);
                        }
                    }, 500);
                });
            };

            const result = await mockSearch(username);
            setUsername('');
            if (result) {
                setSearchResult(result);
            } else {
                setShowModal(true);
                setSearchResult(null);
            }
        } catch (err) {
            setUsername('');
            setSearchResult(null);
            setShowModal(true);
        }
    };

    return (
        <View style={SearchStyle.container}>
            <View style={SearchStyle.topContent}>
                <View style={SearchStyle.inputContainer}>
                    <TextInput
                        style={SearchStyle.input}
                        placeholder="Enter username to search"
                        value={username}
                        onChangeText={setUsername}
                    />
                    {username.length > 0 && (
                        <TouchableOpacity
                            style={SearchStyle.clearButton}
                            onPress={() => setUsername('')}
                        >
                            <Text style={SearchStyle.clearButtonText}>×</Text>
                        </TouchableOpacity>
                    )}
                </View>

                {searchResult && (
                    <View style={SearchStyle.resultContainer}>
                        <Text style={SearchStyle.username}>{searchResult.name}</Text>
                        <TouchableOpacity
                            style={SearchStyle.viewProfileButton}
                            onPress={() => navigation.navigate('Profile', { friend: searchResult })}
                        >
                            <Text style={SearchStyle.buttonText}>View Profile</Text>
                        </TouchableOpacity>
                    </View>
                )}

                <NoSuchUserModal
                    visible={showModal}
                    onClose={() => setShowModal(false)}
                />
            </View>

            <View style={SearchStyle.buttonContainer}>
                {searchResult && (
                    <TouchableOpacity
                        style={[SearchStyle.searchButton, SearchStyle.clearSearchButton]}
                        onPress={() => setSearchResult(null)}
                    >
                        <Text style={SearchStyle.buttonText}>Clear</Text>
                    </TouchableOpacity>
                )}

                <TouchableOpacity
                    style={SearchStyle.searchButton}
                    onPress={handleSearch}
                >
                    <Text style={SearchStyle.buttonText}>Search</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}