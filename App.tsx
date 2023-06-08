/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// import at the very top of everything.
import './ignoreWarnings';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './src/pages/HomeScreen';
// import SelectFileScreen from './src/pages/SelectFile';
import {
  Button,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  useColorScheme,
  View,
} from 'react-native';

const Stack = createNativeStackNavigator();

function DetailsScreen({route, navigation}) {
  const {itemId, otherParam} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

function CreatePostScreen({navigation, route}) {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{height: 200, padding: 10, backgroundColor: 'white'}}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          navigation.navigate({
            name: 'Home',
            params: {post: postText},
            merge: true,
          });
        }}
      />
    </>
  );
}

function ProfileScreen({navigation}) {
  return (
    <>
      <Text>Profile screen</Text>
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({title: 'Updated!'})}
      />
    </>
  );
}

function LogoTitle() {
  return (
    <Image
      style={{width: 50, height: 50}}
      source={{
        uri: 'https://github.githubassets.com/images/icons/emoji/unicode/1f9f0.png',
      }}
    />
  );
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: props => <LogoTitle {...props} />,
            headerRight: () => <Button title="Update count" />,
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{itemId: 42}}
        />
        <Stack.Screen
          name="CreatePost"
          component={CreatePostScreen}
          initialParams={{itemId: 42}}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          initialParams={{title: 'Profile init'}}
          options={({route}) => ({title: route.params.name})}
        />
        {/* <Stack.Screen name="SelectFile" component={SelectFileScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
