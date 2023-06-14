import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  ImageBackground,
  Pressable,
} from 'react-native';

import MyListItem from './components/MyListItem';
import {ProfileContext} from '@/context/ProfileContext';

const contData = [
  {img: './images/wd-sq.png', toScreen: 'apply', dis: '我的申请'},
  {img: './images/wd-lljl.png', toScreen: 'footPrint', dis: '浏览记录'},
  {img: './images/wd-bzzx.png', toScreen: 'setting', dis: '帮助中心'},
  {img: './images/wd-sz.png', toScreen: 'Settings', dis: '设置'},
];

const App = ({navigation}) => {
  const scanProfle = () => {
    navigation.navigate('Profile');
  };
  const profile = useContext(ProfileContext);
  console.log('ProfileContext', profile);
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('@/assets/images/wd-bg.png')}
        style={styles.bgImage}>
        <View style={styles.mainTop}>
          <View style={styles.logo}>
            <Image
              source={require('@/assets/images/wd-logo.png')}
              style={{width: 65, height: 65}}
            />
          </View>
          <View style={styles.username}>
            <Text style={styles.usernameText}>user name </Text>
          </View>
          <View style={styles.loginArrow}>
            <Pressable onPress={scanProfle}>
              <Image
                source={require('@/assets/images/go-logoin.png')}
                style={{width: 18, height: 18}}
              />
            </Pressable>
          </View>
        </View>
      </ImageBackground>
      {contData.map((item, ind) => {
        return (
          <MyListItem
            data={item}
            key={`mylistItem${ind}`}
            navigation={navigation}
          />
        );
      })}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 0,
    justifyContent: 'flex-start',
    padding: 0,
  },
  main: {},
  bgImage: {
    resizeMode: 'contain',
    width: '100%',
    height: 100,
  },
  mainTop: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    padding: 6,
  },
  logo: {},
  username: {
    flex: 1,

    paddingLeft: 14,
  },
  usernameText: {
    fontSize: 22,
    color: 'white',
  },
  loginArrow: {},
});

export default App;
