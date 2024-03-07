import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Explore from '../pages/Explore';
import Profile from '../pages/Profile';
import Search from '../pages/Find';
import Ionicon from 'react-native-vector-icons/Ionicons'


const Tab = createBottomTabNavigator()

export default function Navbar() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: { backgroundColor: '#1c1c1c',borderTopWidth: 0 }, tabBarActiveTintColor: '#fff'}}>
      <Tab.Screen name='Explore' component={Explore} options={{ tabBarIcon: ({ color, size }) => (<Ionicon name='compass-outline' color={color} size={size} />) }}></Tab.Screen>
      <Tab.Screen name='Search' component={Search} options={{ tabBarIcon: ({ color, size }) => (<Ionicon name='location-outline' color={color} size={size} />) }}></Tab.Screen>
      <Tab.Screen name='Profile' component={Profile} options={{ tabBarIcon: ({ color, size }) => (<Ionicon name='happy-outline' color={color} size={size} />) }}></Tab.Screen>
    </Tab.Navigator>
  )
}  