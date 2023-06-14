/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
  NavigationState,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '@/pages/Home';
import MineScreen from '@/pages/Mine';
import LoanScreen from '@/pages/Loan';

import {Image, ImageSourcePropType} from 'react-native';
import ProfileProvider from '@/context/ProfileContext';
import {verifyToken} from '@/utils/api/api';
import {useRef, useState} from 'react';
import Login from '@/pages/Mine/Login';

const Tab = createBottomTabNavigator();

interface ITabBarIconProp {
  focused: boolean;
  color: string;
}

const whiteList = ['Login', 'Home'];

function Container() {
  const [isValid, setIsValid] = useState(false);
  const navigationRef = useNavigationContainerRef();

  const validateToken = () => {
    verifyToken().then(res => {
      if (res.success) {
        setIsValid(true);
        return;
      }
      setIsValid(false);
      navigationRef.navigate({name: 'Login'} as never);
    });
  };
  const handleStateChange = () => {
    const route = navigationRef?.getCurrentRoute();
    console.log('routeName', route?.name);
    if (route?.name && !whiteList.includes(route.name)) {
      validateToken();
    }
  };

  React.useEffect(() => {
    validateToken();
  }, []);

  console.log('App root render:::');

  return (
    <NavigationContainer ref={navigationRef} onStateChange={handleStateChange}>
      <Tab.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Mine">
        {!isValid ? (
          <>
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
          </>
        ) : (
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
        )}

        <Tab.Group navigationKey={isValid ? 'user' : 'guest'}>
          <Tab.Screen
            name="Mine"
            component={MineScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({focused}) => (
                <FooterIcon
                  focused={focused}
                  activedIcon={require('@/assets/images/sy-act.png')}
                  inActivedIcon={require('@/assets/images/sy.png')}
                />
              ),
            }}
          />
        </Tab.Group>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <ProfileProvider>
      <Container />
    </ProfileProvider>
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
