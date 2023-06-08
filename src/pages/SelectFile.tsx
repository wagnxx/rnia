/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// import at the very top of everything.
import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {Text} from 'react-native';
// const RNFileSelectorModule = require('react-native-file-selector');
// import 'react-native-file-selector'

// const RNFileSelector = RNFileSelectorModule.default;
const {launchCamera} = require('react-native-image-picker');

import Button from 'react-native-button';

function App({navigation, route}): JSX.Element {
  const [visible, setVisible] = useState(false);
  const selectFile = () => {
    // RNFileSelector.Show({
    //   title: 'Select File',
    //   onDone: path => {
    //     console.log('file selected: ' + path);
    //   },
    //   onCancel: () => {
    //     console.log('cancelled');
    //   },
    // });
    // setVisible(pre => !pre);
    // console.log('RNFileSelector:::', RNFileSelector.Show);
    // RNFileSelector.Show({title: 'Select File'});
    launchCamera(
      {
        mediaType: 'mixed',
      },
      res => {
        console.log('res::::', res);
      },
    );
  };
  return (
    <>
      <Text>select file</Text>
      <Button onPress={selectFile}>select file</Button>
      {/*
      <RNFileSelector
        title={'Select File'}
        visible={visible}
        onDone={path => {
          console.log('file selected: ' + path);
        }}
        onCancel={() => {
          console.log('cancelled');
        }}
      /> */}
    </>
  );
}

export default App;
