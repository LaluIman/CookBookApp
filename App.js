import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import AppNavigator from './navigation/AppNavigator';
import FavoriteView from './screens/Favorite';
import { FavoritesProvider } from './Favoritecontext';

const Tab = createBottomTabNavigator();

function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      paddingBottom: 15,
      borderRadius: 30,
      margin: 10,
    }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
          ? options.title
          : route.name;

        const isFocused = state.index === index;

        let iconName = route.name === 'Home' ? 'home' : 'heart';
        let solid = route.name === 'Favorite' && isFocused;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: isFocused ? '#f5f5f5' : '#f5f5f5',
              borderRadius: 15,
              padding: isFocused ? 10 : 10,
              flexDirection: 'row',
              elevation: 1
            }}
            key={index}
          >
            <FontAwesome5 name={iconName} size={20} color={isFocused ? '#1DCA69' : 'gray'} solid={solid} />
            {isFocused && (
              <Text style={{ color: 'black', marginLeft: 8, fontWeight: '400' }}>{label}</Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function App() {
  return (
    <FavoritesProvider>
      <NavigationContainer>
        <Tab.Navigator
          tabBar={(props) => <CustomTabBar {...props} />}
        >
          <Tab.Screen name="Home" component={AppNavigator} options={{ headerShown: false }} />
          <Tab.Screen name="Favorite" component={FavoriteView} options={{ headerShown: false }} />
        </Tab.Navigator>
      </NavigationContainer>
    </FavoritesProvider>
  );
}
