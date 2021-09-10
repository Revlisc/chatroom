import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Components/HomeScreen';
import ProfileScreen from './Components/ProfileScreen';
import LoginScreen from './Components/LoginScreen';

const Stack = createStackNavigator();

function Stacks() {
  return (
    <Stack.Navigator >
      <Stack.Screen name='Login' component={LoginScreen} style={styles} />
      <Stack.Screen name='Home' component={Tabs} />
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeScreen}/>
      <Tab.Screen name='Profile' component={ProfileScreen}/>
    </Tab.Navigator> 
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stacks />
       
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: 'red',
    
    
  },
});
