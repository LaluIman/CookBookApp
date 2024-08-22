import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeView from '../screens/HomeView';
import DetailView from '../screens/DetailView';
import FavoriteView from '../screens/Favorite';
import FinishView from '../screens/FinishView'; // Import the new FinishView screen

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Recipe List" 
        component={HomeView} 
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen name="Favorite" component={FavoriteView} />
      <Stack.Screen name="Detail"  
        options={{
          title: '',
          headerShown: false,
        }}
        component={DetailView} />
      <Stack.Screen name="FinishView"  
        options={{
          title: '',
          headerShown: false,
        }}
        component={FinishView} />
    </Stack.Navigator>
  );
};

export default AppNavigator;