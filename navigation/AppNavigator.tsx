import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import UploadScreen from '../screens/UploadScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#E5E5EA',
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="home" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Upload"
        component={UploadScreen}
        options={{
          tabBarLabel: 'Upload',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="upload" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function TabBarIcon({ name, color }: { name: string; color: string }) {
  const getIcon = () => {
    switch (name) {
      case 'home':
        return '🏠';
      case 'upload':
        return '📤';
      default:
        return '•';
    }
  };

  return <Text style={styles.icon}>{getIcon()}</Text>;
}

const styles = StyleSheet.create({
  icon: {
    fontSize: 24,
  },
});

