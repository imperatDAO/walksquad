import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import readSampleData from './src/api/HealthConnectAPI';
import React, { useEffect, useState } from 'react';
import { styles as MainPageStyle } from './src/styles/MainPageStyles'
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import FriendsScreen from './src/components/FriendsScreen';
import ProfilePage from './src/components/ProfilePage';
import SearchScreen from './src/components/SearchScreen';
import LeaderboardScreen from './src/components/LeaderboardScreen';
import { NavigationBackBtn } from './src/components/NavigationBackBtn';
import { Ionicons } from '@expo/vector-icons';
import NotificationModal from './src/modals/NotificationModal';

// Temporary mock data - replace with real data later
const mockFriends = [
  { id: '1', name: 'Alice', steps: 8000 },
  { id: '2', name: 'Bob', steps: 6500 },
  { id: '3', name: 'Charlie', steps: 9200 },
  { id: '81', name: 'You', steps: 0 },
];

export interface Friend {
  id: string;
  name: string;
  steps: number;
};

interface FriendRequest {
  id: string;
  username: string;
}

export type RootStackParamList = {
  Home: undefined;
  Friends: { friends: Friend[] };
  Profile: { friend: Friend };
  Search: undefined;
  Leaderboard: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [mySteps, setMySteps] = useState<number>(0);
  const [friends, setFriends] = useState(mockFriends);
  const [leaderId, setLeaderId] = useState<string>('');
  const [showNotifications, setShowNotifications] = useState(false);
  //const [friendRequests, setFriendRequests] = useState<FriendRequest[]>([]);

  const [friendRequests, setFriendRequests] = useState<FriendRequest[]>([
    {
      id: '1',
      username: 'John Doe'
    },
    {
      id: '2',
      username: 'Jane Smith'
    },
    {
      id: '3',
      username: 'Jane Smith'
    },
    {
      id: '4',
      username: 'Jane Smith'
    },
    {
      id: '5',
      username: 'Jane Smith'
    }
  ]);

  useEffect(() => {
    readSampleData().then(records => {
      const totalSteps = records?.reduce((sum, rec) => sum + (rec.count || 0), 0) || 0;
      console.log(totalSteps);
      setMySteps(totalSteps);

      const updatedFriends = friends.map(friend =>
        friend.name === 'You' ? { ...friend, steps: totalSteps } : friend
      );
      const sortedFriends = [...updatedFriends].sort((a, b) => b.steps - a.steps);
      setFriends(sortedFriends);

      const leader = updatedFriends.reduce((max, current) =>
        current.steps > max.steps ? current : max
      );
      setLeaderId(leader.id);
    });
  }, []);

  const handleAcceptRequest = async (requestId: string) => {
    console.log('Accepting request:', requestId);
    setFriendRequests(prev => prev.filter(req => req.id !== requestId));
  };

  const handleDeclineRequest = async (requestId: string) => {
    console.log('Declining request:', requestId);
    setFriendRequests(prev => prev.filter(req => req.id !== requestId));
  };

  const renderItem = ({ item }: { item: Friend }) => (
    <View style={[
      MainPageStyle.listItem,
      item.id === leaderId && MainPageStyle.leaderItem
    ]}>
      <Text style={MainPageStyle.name}>{item.name}</Text>
      <Text style={MainPageStyle.steps}>{item.steps}</Text>
    </View>
  );

  const HomeScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();
    return (
      <View style={MainPageStyle.container}>
        <View style={MainPageStyle.headerContainer}>
          <View style={MainPageStyle.headerContent}>
            <Text style={MainPageStyle.title}>
              {friends.find(friend => friend.name === 'You')?.name || 'You'}
            </Text>
            <TouchableOpacity
              onPress={() => setShowNotifications(true)}
              style={MainPageStyle.notificationIcon}
            >
              <Ionicons name="mail-outline" size={24} color="#007AFF" />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={friends}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={MainPageStyle.list}
          showsVerticalScrollIndicator={true}
          indicatorStyle="black"
          persistentScrollbar={true}
          scrollEnabled={true}
        />

        {/* Leaderboard Button */}
        <View style={MainPageStyle.buttonContainer}>
          <TouchableOpacity
            style={MainPageStyle.leaderboardButton}
            onPress={() => navigation.navigate('Leaderboard')}
          >
            <Text style={MainPageStyle.buttonText}>Leaderboard</Text>
          </TouchableOpacity>
        </View>

        {/* Friends and Search Buttons */}
        <View style={MainPageStyle.bottomButtonsContainer}>
          <TouchableOpacity
            style={MainPageStyle.smallButton}
            onPress={() => {
              const filteredFriends = friends.filter(friend => friend.name !== 'You');
              navigation.navigate('Friends', { friends: filteredFriends })
            }}
          >
            <Text style={MainPageStyle.buttonText}>Friends</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={MainPageStyle.smallButton}
            onPress={() => navigation.navigate('Search')}
          >
            <Text style={MainPageStyle.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>
        <NotificationModal
          visible={showNotifications}
          onClose={() => setShowNotifications(false)}
          friendRequests={friendRequests}
          onAccept={handleAcceptRequest}
          onDecline={handleDeclineRequest}
        />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerTitle: '',
          headerLeft: ({ canGoBack }) =>
            canGoBack ? (
              <NavigationBackBtn />
            ) : null,
          headerStyle: {
            backgroundColor: '#007AFF',
          },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Friends"
          component={FriendsScreen}
          options={{
            title: 'My Friends',
            headerStyle: {
              backgroundColor: '#007AFF',
            },
            headerTintColor: '#fff',
          }}
        />{/*TODO implement*/}
        <Stack.Screen
          name="Profile"
          component={ProfilePage}
          options={{
            title: 'Profile',
            headerStyle: { backgroundColor: '#007AFF' },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            title: 'Search Users',
            headerStyle: { backgroundColor: '#007AFF' },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Leaderboard"
          component={LeaderboardScreen}
          options={{
            title: 'Leaderboard',
            headerStyle: { backgroundColor: '#007AFF' },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

