import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export const NavigationBackBtn = () => {
  const navigation = useNavigation<NavigationProp>();
  
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.button}
      accessibilityRole="button"
      accessibilityLabel="Go back to previous screen"
    >
      <Text style={styles.text}>Back</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginLeft: Platform.OS === 'ios' ? 15 : 10,
  },
  text: {
    color: Platform.OS === 'ios' ? '#007AFF' : '#fff',
    fontSize: Platform.OS === 'ios' ? 16 : 16,
  },
});