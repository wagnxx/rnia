import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import MyProfile from './MyProfile';
import MyHome from './MyHome';

import Settings from './Settings';
import SettingsDetail from './SettingsDetail';
import Profile from './Profile';
import Login from './Login';

const MineStack = createStackNavigator();

const MineStackNavigator = () => (
  <MineStack.Navigator screenOptions={{headerShown: false}}>
    <MineStack.Screen name="MyHome" component={MyHome} />
    <MineStack.Screen name="Settings" component={Settings} />
    <MineStack.Screen name="SettingsDetail" component={SettingsDetail} />
    <MineStack.Screen name="Profile" component={Profile} />
    <MineStack.Screen name="Login" component={Login} />
  </MineStack.Navigator>
);

export default MineStackNavigator;
