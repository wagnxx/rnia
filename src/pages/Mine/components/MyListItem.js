import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
const context = require.context('../../../assets/', true, /\.(png|jpg)$/);

const MyListItem = ({data, navigation}) => {
  const goDetails = () => {
    console.log('goDetails pressed!');
    navigation.navigate(data.toScreen);
  };
  try {
    return (
      <View style={styles.bot}>
        <View style={styles.logo}>
          <Image source={context(data.img)} style={{width: 22, height: 22}} />
        </View>
        <View style={styles.propertyName}>
          <Text style={styles.name}>{data.dis}</Text>
        </View>
        <View style={styles.detail}>
          <Pressable onPress={goDetails}>
            <Image
              source={context('./images/go-sq.png')}
              alt="wodeimg"
              style={{width: 10, height: 10}}
            />
          </Pressable>
        </View>
      </View>
    );
  } catch (error) {
    return <Text>null</Text>;
  }
};

const styles = StyleSheet.create({
  bot: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 0,
    padding: 6,
  },
  logo: {},
  propertyName: {
    paddingLeft: 10,
    flex: 1,
  },
  name: {},
  detail: {
    // flex: 1,
    // justifyContent: 'flex-end',
    // marginLeft: 'auto',
  },
});

export default MyListItem;
