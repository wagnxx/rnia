/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// import at the very top of everything.
import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';

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
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      console.log('route.params?.post update:::', route.params?.post);
    }
  }, [route.params?.post]);

  return (
    <>
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
      <Button onPress={() => navigation.navigate('SelectFile')}>
        SelectFileScreen
      </Button>
    </>
  );
}

export default App;
