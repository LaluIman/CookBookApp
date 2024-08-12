import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import AppNavigator from './navigation/AppNavigator';
import FavoriteView from './screens/Favorite';
import UserView from './screens/User';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home'; 
            } else if (route.name === 'User') {
              iconName = 'user';
            } else if (route.name === 'Favorite') {
              iconName = 'heart';
            } 

            // Return the FontAwesome icon
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#1DCA69',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={AppNavigator} options={{ headerShown: false }}/>
        <Tab.Screen name="User" component={UserView} options={{ headerShown: false }}/>
        <Tab.Screen name="Favorite" component={FavoriteView} options={{ headerShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}