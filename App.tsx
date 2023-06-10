import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import DawerScreen from './src/pages/Drawer';
import HomeScreen from './src/pages/Home';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="DawerScreen" component={DawerScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
