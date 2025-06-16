export interface Friend {
  id: string;
  name: string;
  steps: number;
};

export interface FriendRequest {
  id: string;
  username: string;
}

export interface NotificationsModalProps {
  visible: boolean;
  onClose: () => void;
  friendRequests: FriendRequest[];
  onAccept: (requestId: string) => void;
  onDecline: (requestId: string) => void;
}

export type RootStackParamList = {
  Home: undefined;
  Friends: { friends: Friend[] };
  Profile: { friend: Friend };
  Search: undefined;
  Leaderboard: undefined;
};