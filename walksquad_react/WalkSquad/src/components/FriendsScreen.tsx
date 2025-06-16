import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { styles as FriendsStyle } from '../styles/FriendsStyle';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { Friend, RootStackParamList } from '../../App'; 
import { useNavigation } from '@react-navigation/native';

// interface FriendsScreenProps {
//   friends: Friend[];
// }

type FriendsScreenProps = NativeStackScreenProps<RootStackParamList, 'Friends'>;
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Friends'>;

export default function FriendsScreen({ route }: FriendsScreenProps) {
  const { friends } = route.params;
  const navigation = useNavigation<NavigationProp>();

  const renderItem = ({ item }: { item: Friend }) => (
    <View style={FriendsStyle.listItem}>
      <Text style={FriendsStyle.username}>{item.name}</Text>
      <TouchableOpacity 
        style={FriendsStyle.viewProfileButton}
        onPress={() => navigation.navigate('Profile', { friend: item })}
      >
        <Text style={FriendsStyle.buttonText}>View Profile</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={FriendsStyle.container}>
      <FlatList
        data={friends}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
