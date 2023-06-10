/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// import at the very top of everything.
import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';

import Button from 'react-native-button';

function App({navigation, route}): JSX.Element {
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
      console.log('route.params?.post update:::', route.params?.post);
    }
  }, [route.params?.post]);

  return (
    <>
      <Button
        onPress={onPressedHandle}
        onLongPress={onLongPressHandle}
        style={[styles.button, styles.buttonGreen]}>
        Learn More
      </Button>
      <Button onPress={() => navigation.navigate('CreatePost')}>
        Create post
      </Button>
      <Button onPress={() => navigation.navigate('Profile')}>Profile</Button>
      <Button onPress={() => navigation.navigate('Components')}>
        Components
      </Button>
      <Button onPress={() => navigation.navigate('Drawer', {screen: 'Feed'})}>
        Drawer
      </Button>
      <View style={styles.alignCenter}>
        <Image
          source={{
            uri: 'https://xieyufei.com/img/bg_small.jpg',
            // cache: 'only-if-cached',
          }}
          style={styles.minImage}
          opacity={0.2}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 20,
    width: 200,
    borderRadius: 4,
  },
  buttonGreen: {
    backgroundColor: 'red',
    color: 'green',
  },
  alignCenter: {
    alignItems: 'center',
  },
  minImage: {
    width: 50,
    height: 200,
  },
});

export default App;
