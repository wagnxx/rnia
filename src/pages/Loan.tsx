import * as React from 'react';
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {useEffect, useState} from 'react';
import {verifyToken} from '@/utils/api/api';

function NotificationsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notifications!</Text>
    </View>
  );
}

function ProfileScreen({navigation}) {
  const Verify = () => {
    verifyToken().then(res => {
      console.log('varify token:::', res);
    });
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile!</Text>
      <Button title="Verify Token" onPress={Verify} />
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  useEffect(() => {
    console.log('Loan myTab mounted');
    return () => {
      console.log('Loan myTab destroyed');
    };
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {backgroundColor: 'powderblue'},
      }}>
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{tabBarLabel: 'Home'}}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{tabBarLabel: 'Updates'}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{tabBarLabel: 'Profile'}}
      />
    </Tab.Navigator>
  );
}
export default function App() {
  return <MyTabs />;
}

function FeedScreen() {
  const justifyContents = [
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly',
  ] as const;

  const alignItemsArr = [
    'flex-start',
    'flex-end',
    'center',
    'stretch',
    'baseline',
  ] as const;
  const [justifyContent, setJustifyContent] = useState(0);
  const [alignItems, setAlignItems] = useState(0);
  const changeSettings = (value, options, setterFunction) => {
    if (value === options.length - 1) {
      setterFunction(0);
      return;
    }
    setterFunction(value + 1);
  };

  const hookedStyles = {
    justifyContent: justifyContents[justifyContent],
    alignItems: alignItemsArr[alignItems],
  };
  return (
    <View style={styles.container}>
      <Text>Feed! Layout</Text>
      <View style={[styles.flexRow, hookedStyles]}>
        <Square />
        <Square />
        <Square />
      </View>
      <View>
        <Button
          title="Change justifyContent"
          onPress={() =>
            changeSettings(justifyContent, justifyContents, setJustifyContent)
          }
        />
        <Text>{justifyContents[justifyContent]}</Text>
      </View>
      <View>
        <Button
          title="Change AlignItems"
          onPress={() =>
            changeSettings(alignItems, alignItemsArr, setAlignItems)
          }
        />
        <Text>{alignItemsArr[alignItems]}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  item: {
    width: 44,
    height: 44,
    backgroundColor: randomHexColor(),
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'red',
  },
  itemText: {
    textAlign: 'center',
    lineHeight: 44,
  },
  flexRow: {
    height: 200,
    borderWidth: 1,
    borderColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

function Square() {
  return (
    <View
      style={{
        width: 50,
        height: 50,
        backgroundColor: randomHexColor(),
      }}>
      {/* <Text>S</Text> */}
    </View>
  );
}

function randomHexColor() {
  return '#000000'.replace(/0/g, () => {
    return Math.round(Math.random() * 16).toString(16);
  });
}
