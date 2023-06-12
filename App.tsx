/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '@/pages/Home';
import MineScreen from '@/pages/Mine/Mine';
import LoanScreen from '@/pages/Loan';

import {Image, ImageSourcePropType} from 'react-native';

const Tab = createBottomTabNavigator();

interface ITabBarIconProp {
  focused: boolean;
  color: string;
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, focused}: ITabBarIconProp) => (
              <FooterIcon
                focused={focused}
                activedIcon={require('@/assets/images/sy-act.png')}
                inActivedIcon={require('@/assets/images/sy.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Loan"
          component={LoanScreen}
          options={{
            headerShown: true,
            tabBarIcon: ({color, focused}) => (
              <FooterIcon
                focused={focused}
                activedIcon={require('@/assets/images/dk-act.png')}
                inActivedIcon={require('@/assets/images/dk.png')}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Mine"
          component={MineScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <FooterIcon
                focused={focused}
                activedIcon={require('@/assets/images/sy-act.png')}
                inActivedIcon={require('@/assets/images/sy.png')}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

interface IFooterIconProp {
  focused: boolean;
  activedIcon: ImageSourcePropType;
  inActivedIcon: ImageSourcePropType;
}
//IndexIcon
function FooterIcon({focused, activedIcon, inActivedIcon}: IFooterIconProp) {
  const iconStyle = {width: 18, height: 18};
  if (focused) {
    return <Image source={activedIcon} style={iconStyle} />;
  } else {
    return <Image source={inActivedIcon} style={iconStyle} />;
  }
}
