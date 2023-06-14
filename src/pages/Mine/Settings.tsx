import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  NativeModules,
  Platform,
  Image,
  SafeAreaView,
  FlatList,
  Pressable,
} from 'react-native';
const {StatusBarManager} = NativeModules;

const STATUS_BAR_HEIGHT =
  Platform.OS === 'ios' ? StatusBarManager.HEIGHT : StatusBar.currentHeight;

const data = ['关于我们', '客服热线 ', '商务合作', '退出登陆'];

const Settings = ({navigation}) => {
  const gotoDetail = () => {
    navigation.navigate('SettingsDetail');
  };
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={styles.listItem}>
              <Text style={styles.listItemText}>{item}</Text>
              <View style={styles.detail}>
                <Pressable onPress={gotoDetail}>
                  <Image
                    source={require('@/assets/images/go-sq.png')}
                    alt="wodeimg"
                    style={{width: 10, height: 10}}
                  />
                </Pressable>
              </View>
            </View>
          )}
          keyExtractor={item => item}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: STATUS_BAR_HEIGHT,
    marginHorizontal: 0,
    justifyContent: 'flex-start',
  },
  listItem: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  listItemText: {},
  detail: {},
});

export default Settings;
