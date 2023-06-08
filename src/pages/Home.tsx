/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// import at the very top of everything.
import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';

import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  useColorScheme,
  View,
} from 'react-native';

import Button from 'react-native-button';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Section from '../components/Section';

const imageSource = {
  uri: 'https://xieyufei.com/img/bg_small.jpg',
  // cache: 'only-if-cached',
};

function App({navigation, route}): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const screenWidth = Dimensions.get('window').width;

  const [imageStyle, setImageImageStyle] = useState({
    width: 0,
    height: 300,
  });
  useEffect(() => {
    Image.getSize(imageSource.uri, (width, height) => {
      console.log('image getsize ====:::', width, height);
      const rate = width / height;
      const displayWidth = Math.floor(screenWidth / 2);
      const displayHeight = displayWidth / rate;
      if (width || height) {
        setImageImageStyle(pre => {
          return {
            ...pre,
            width: displayWidth,
            height: displayHeight,
          };
        });
      }
    });
  }, [screenWidth]);

  const onPressedHandle = useCallback(() => {
    console.log('Simple Button pressed');
    navigation.navigate('Details', {
      itemId: 86,
      otherParam: 'anything you want here',
    });
  }, [navigation]);

  const onLongPressHandle = function () {
    console.log('Button onLongPressHandle');
  };

  useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      console.log('route.params?.post update:::', route.params?.post);
    }
  }, [route.params?.post]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <Button
          onPress={onPressedHandle}
          onLongPress={onLongPressHandle}
          style={{
            fontSize: 20,
            color: 'green',
            width: 200,
            backgroundColor: 'red',
            borderRadius: 4,
          }}>
          Learn More
        </Button>
        <Button onPress={() => navigation.navigate('CreatePost')}>
          Create post
        </Button>
        <Button onPress={() => navigation.navigate('Profile')}>Profile</Button>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step 1">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
            <Image source={imageSource} style={imageStyle} />
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
